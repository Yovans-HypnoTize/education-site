import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import LazyImage from "../LazyImage";
// import { red } from "@mui/material/colors";

type PointType = {
  id: string;
  title: string;
  onClick?: () => void;
};

const TabPanel = ({ children, value, index }: any) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
  </div>
);

const ReuTabs = ({
  tabItems,
  variant,
  showClickableCursor
}: {
  tabItems: any[];
  variant: "two-card" | "custom-card-box";
  showClickableCursor: boolean
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* Tab Headers */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="tab navigation"
          centered
          sx={{
            "& .MuiTab-root": {
              fontWeight: 600,
              fontSize: {xs:11,sm:"1rem"},
              textTransform: "none",
              px: 1,
            },
            "& .Mui-selected": {
              border: "2px solid #5580FF",
              borderRadius: "8px",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {tabItems.map((item) => (
            <Tab key={item.id} label={item.title} />
          ))}
        </Tabs>
      </Box>

      {/* Tab Content */}
      {variant === "two-card" &&
        tabItems.map((item, index) => (
          <TabPanel key={item.id} value={value} index={index}>
            <Grid container spacing={4} alignItems="center">
              {/* Left Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <LazyImage src={item.children.left.img}
                  alt={item.title}
                  style={{ width: "100%", borderRadius: 8 }}/>
                {/* <img
                  src={item.children.left.img}
                  alt={item.title}
                  style={{ width: "100%", borderRadius: 8 }}
                /> */}
              </Grid>

              {/* Right Content */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.children.right.heading}
                </Typography>
                <List>
                  {item.children.right.points.map(
                    (point: string, idx: number) => (
                      <ListItem key={idx} sx={{ pl: 0 }}>
                        <ListItemText primary={`• ${point}`} />
                      </ListItem>
                    )
                  )}
                </List>
              </Grid>
            </Grid>
          </TabPanel>
        ))}

      {variant === "custom-card-box" &&
        tabItems.map((item, index) => (
          <TabPanel key={item.id} value={value} index={index}>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={"center"}
            >
              {item.children.right.points.map(
                (point: PointType, idx: number) => (
                  <Grid
                    size={{ xs: 12, sm:6, md: 3 }}
                    key={`${idx}_${item}`}
                    sx={{
                      borderColor: "gray",
                      height: {xs:100, md:150,lg:100},
                      width: "100%",
                      borderRadius: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      transition:
                        "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease",

                      "&:hover": {
                        backgroundColor: { md: "#1D70BC" },
                        transform: { md: "scale(1.10)" },
                        boxShadow: { md: "0px 12px 24px rgba(0, 0, 0, 0.3)" },
                        cursor: showClickableCursor ? "pointer" : "default",
                        color: { md: "#fff" },
                      },
                    }}
                    onClick={point.onClick}
                  >
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 700, padding: {xs:5,md:2,lg:5} }}
                    >
                      {point.title}
                    </Typography>
                  </Grid>
                )
              )}
            </Grid>
          </TabPanel>
        ))}
    </Box>
  );
};

export default ReuTabs;
