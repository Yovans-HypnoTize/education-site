import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function StyledTabs({ tabData }: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          background:
            "transparent linear-gradient(180deg, #2F5DF5 0%, #7D69EE 100%) 0% 0% no-repeat padding-box",
          // bgcolor: "#ff4bb2",
          display: "flex",
          justifyContent: "center",
          py: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="standard" // Keep control ourselves
          slotProps={{
            indicator: {
              sx: { display: "none" },
            },
          }}
          sx={{
            display: "flex", // Ensures horizontal flex layout
            width: "100%",
            minHeight: "auto",
            mx: 0.5,
          }}
        >
          {tabData.map((tab: any, index: number) => (
            <Tab
              key={index}
              label={
                <Typography
                  sx={{
                    color: value === index ? "#FFFFFF" : "#FFFFFF",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: { xs: 10, sm: 16 },
                  }}
                >
                  {tab.label}
                </Typography>
              }
              disableRipple
              sx={{
                flex: 1, // Equal width tabs
                px: 0, // Remove padding that might affect width
                py: 1,
                border:
                  value === index
                    ? "0.5px solid rgba(255,255,255,0.3)"
                    : "transparent",
                fontWeight: "bold",
                borderRadius: 2,
                mx: { sm: 2 },
                minHeight: 45,
                minWidth: 0, // Prevents default min width from MUI
                textTransform: "none",
                bgcolor:
                  value === index ? "rgba(255,255,255,0.23)" : "transparent",
                color: value === index ? "#ffffff" : "#ffffff",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: value === index ? "" : "rgba(255,255,255,0.2)",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          background:
            " transparent linear-gradient(145deg, #FFFFFF 0%, #F1EFFC 100%) 0% 0% no-repeat padding-box",
          height: {xs:580,sm:370},
        }}
      >
        {tabData.map((tab: any, index: number) => (
          <div key={index} hidden={value !== index}>
            {value === index && (
              <Box>
                <Grid
                  container
                  spacing={{ xs: 0, sm: 2 }}
                  sx={{ pt: { sm: 2, md: 5 } }}
                >
                  <Grid size={{ xs: 12, sm: 5 }}>
                    <Box
                      component={"img"}
                      src={tab.content.img}
                      alt={`${tab.content.img}_${index}`}
                      sx={{
                        height: "100%",
                        width: "100%",
                        paddingRight: { md: "30px" },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 7 }}>
                    <Box
                      sx={{
                        height: { xs: 350, sm: 300, md: 280 },
                        p: { xs: 2, lg: 5 },
                        bgcolor: { xs: "", sm: "#FFFFFF" },
                        mb: 5,
                        mr: 4,
                      }}
                    >
                      <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                        {tab.content.title}
                      </Typography>
                      <Typography
                        sx={{ my: { sm: 1, md: 2, xl: 3 }, fontWeight: 600 }}
                      >
                        {tab.content.subTitle}
                      </Typography>
                      {tab.content.points.map((point: any, idx: number) => (
                        <Box
                          key={`${point.label}_${idx}`}
                          sx={{ display: "flex", mt: 0.5 }}
                        >
                          <CircleIcon
                            sx={{
                              height: 12,
                              width: 12,
                              color: "#6F66EF",
                              mt: 0.7,
                            }}
                          />
                          <Typography
                            sx={{ pl: 2, fontSize: 14, lineHeight: 2 }}
                          >
                            {point.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
}
