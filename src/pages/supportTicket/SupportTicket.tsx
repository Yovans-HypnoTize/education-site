import React, { useEffect, useState } from "react";
import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import { Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTickets } from "../../features/ticket/ticketSlice";
import SupportTicketForm from "./SupportTicketForm";
import unknownUserImage from "../../assets/unknownUserImage.png";
import ReuPagination from "../../components/ReuPagination";

const Layout = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  padding: theme.spacing(4),
  gap: theme.spacing(4),
}));

const LeftPanel = styled(Box)(() => ({
  flex: 1,
}));

const RightPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  borderLeft: `1px solid ${theme.palette.divider}`,
  paddingLeft: theme.spacing(2),
}));

const SupportTicket = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [supportTicketList, setSupportTicketList] = useState<any>([]);

  const dispatch = useAppDispatch();
  const { tickets } = useAppSelector((state) => state.ticket);

  const [pagination, setPagination] = useState<{
    pageSize: number;
    pageNumber: number;
  }>({
    pageSize: 5,
    pageNumber: 1,
  });

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const newExpanded = prev === id ? null : id;
      return newExpanded;
    });
  };

  const reloadData = () => {
    dispatch(
      getTickets({ page: pagination.pageNumber, size: pagination.pageSize })
    );
  };

  useEffect(() => {
    dispatch(
      getTickets({ page: pagination.pageNumber, size: pagination.pageSize })
    );
  }, [dispatch, pagination.pageNumber, pagination.pageSize]);

  useEffect(() => {
    setSupportTicketList(tickets?.data?.content || []);
  }, [tickets]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination((prev) => ({
      ...prev,
      pageNumber: value,
    }));
  };

  return (
    <Layout
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          padding: "16px",
        },
      }}
    >
      {/* Support Ticket Form */}
      <LeftPanel
        sx={{
          width: "60%",
          padding: "20px",
          "@media (max-width: 768px)": {
            width: "100%",
            padding: "12px",
          },
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Support Ticket
        </Typography>

        <SupportTicketForm reloadData={reloadData} />
      </LeftPanel>

      {/* Support History */}
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "50%" } }}>
        <RightPanel sx={{ padding: { xs: "12px", sm: "16px", md: "20px" } }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Support History
          </Typography>

          {supportTicketList?.length > 0 ? (
            supportTicketList?.map((item: any, index: any) => (
              <Box
                key={item.id}
                sx={{
                  borderBottom: "1px solid #eee",
                  py:{xs:1, sm:3},
                  px: { xs: 1, sm: 2, md: 3 },
                }}
              >
                <Box
                  onClick={() => toggleExpand(item.id)}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: {xs:1,sm:5},
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="#252525"
                      fontWeight={600}
                    >
                      #{item.id}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1, textAlign: "left" }}>
                    <Typography
                      variant="body2"
                      color="#252525"
                      fontWeight={600}
                    >
                      {item.name}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: {xs:"left",sm:"right"} }}>
                    <Typography variant="body2" fontWeight={600}>
                      Status:{" "}
                      <span
                        style={{
                          color:
                            item.supportTicketIssueStatus?.name === "Open"
                              ? "#1976d2"
                              : "#555",
                        }}
                      >
                        {item.supportTicketIssueStatus || "N/A"}
                      </span>
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      {new Date(item.createdDate).toLocaleString()}
                    </Typography>
                  </Box>
                </Box>

                <Collapse
                  in={expanded === item.id}
                  timeout="auto"
                  unmountOnExit
                >
                  <Box
                    mt={2}
                    pl={{ xs: 1, sm: 2 }}
                    display="flex"
                    flexDirection="column"
                  >
                    <Box sx={{ display: "flex" }}>
                      <Avatar
                        src={unknownUserImage}
                        alt="unknown user"
                        sx={{ height: 23, width: 23, mr: 1 }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, fontWeight: 600 }}
                      >
                        {item.userName}
                      </Typography>
                    </Box>
                    <React.Fragment key={index}>
                      <Box
                        display="flex"
                        alignItems="flex-start"
                        py={1}
                        gap={2}
                      >
                        <Box display="flex" flexDirection="column" flex={1}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            ml={1}
                          >
                            {item.description}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.disabled"
                            alignSelf="flex-end"
                            mt={1}
                          >
                            {new Date(item.createdDate).toLocaleString()}
                          </Typography>
                        </Box>
                      </Box>
                    </React.Fragment>
                  </Box>
                  {item.remarks !== null && (
                    <Box
                      mt={2}
                      pl={{ xs: 1, sm: 2 }}
                      display="flex"
                      flexDirection="column"
                    >
                      <Divider sx={{ mb: 3 }} />
                      <Box sx={{ display: "flex" }}>
                        <Avatar
                          src={item.responseUserProfileUrl || unknownUserImage}
                          alt="unknown user"
                          sx={{
                            height: 23,
                            width: 23,
                            mr: 1,
                            border: 1,
                            borderColor: "#d0d0d0",
                            boxShadow: "0px 1px 3px #00000040",
                          }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2, fontWeight: 600 }}
                        >
                          {item.responseUser || "N/A"}
                        </Typography>
                      </Box>
                      <React.Fragment key={index}>
                        <Box
                          display="flex"
                          alignItems="flex-start"
                          py={1}
                          gap={2}
                        >
                          <Box display="flex" flexDirection="column" flex={1}>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              ml={1}
                            >
                              {item.remarks || "N/A "}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.disabled"
                              alignSelf="flex-end"
                              mt={1}
                            >
                              {new Date(item.lastModifiedDate).toLocaleString()}
                            </Typography>
                          </Box>
                        </Box>
                      </React.Fragment>
                    </Box>
                  )}
                </Collapse>
              </Box>
            ))
          ) : (
            <Box sx={{ color: "gray" }}>No data available</Box>
          )}
          <Box sx={{ mt: 3 }}>
            {tickets?.data?.totalElements > pagination.pageSize && (
              <ReuPagination
                count={Math.ceil(tickets?.data?.totalPages || 0)}
                page={pagination.pageNumber}
                onPageChange={handlePageChange}
              />
            )}
          </Box>
        </RightPanel>
      </Box>
    </Layout>
  );
};

export default SupportTicket;
