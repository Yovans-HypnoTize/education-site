import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SyntheticEvent, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import { Grid, Typography } from "@mui/material";

type ContentType = {
  id: string | number;
  label: string | number;
};

export interface VerticalTabItem {
  id: number;
  label: string;
  value: string;
  img: string;
  title: string;
  content: ContentType[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: string | number;
  value: string | number;
}

interface TabProps {
  tabItems: VerticalTabItem[];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const VerticalTabs: React.FC<TabProps> = ({ tabItems }) => {
  const [value, setValue] = useState<any>(tabItems[0].id);

  const handleChange = (event: SyntheticEvent, newValue: string | number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={4}>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          orientation="vertical"
          sx={{
            border: 1,
            p: 2,
            borderRadius: 2,
            borderColor: "divider",
            bgcolor: "#FFFFFF",
          }}
          
          slots={{ indicator: () => null }}
        >
          {tabItems.map((tab: any, idx: number) => (
            <Tab
              label={tab.label}
              key={`vertical_tab_header_${tab.id}`}
              sx={{
                my: 1,
                color: "#000000",
                borderRadius: 2,
                // textAlign:"left",
                "&.Mui-selected": {
                  bgcolor: "#000000",
                  color: "#FFFFFF",
                },
                fontSize:{xs:12,lg:14},
                
              }}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid size={{xs:12,sm:8,md:9}}>
        {tabItems.map((tab: VerticalTabItem, idx: number) => (
          <TabPanel
            key={`vertical_tab_content_${tab.id}`}
            value={value}
            index={tab.id}
          >
            <Grid container spacing={4} sx={{ pl: {md:3} }}>
              <Grid size={{xs:12,sm:4}}>
                <img src={tab.img} style={{height: "100%", width: "100%"}}/>
                {/* <Box
                  component={"img"}
                  src={tab.img}
                  sx={{ height: "100%", width: "100%" }}
                /> */}
              </Grid>
              <Grid size={{xs:12,sm:8}} sx={{ pl: {md:3 }}}>
                <Typography sx={{ my: 3, fontSize: {xs:18,lg:20}, fontWeight: 700 }}>
                  {tab.title}
                </Typography>
                {tab.content.map((item) => (
                  <Typography sx={{ mb: 3, fontSize:{xs:12,md:14,lg:16} }} key={`points_${item.id}`}>{item.label}</Typography>
                ))}
              </Grid>
            </Grid>
          </TabPanel>
        ))}
      </Grid>
    </Grid>
  );
};

export default VerticalTabs;
