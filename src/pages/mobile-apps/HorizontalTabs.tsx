import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SyntheticEvent, useState } from "react";

interface TabProps {
  tabItems: {
    id: string | number;
    label: string;
    icon?: string;
    activeIcon?: string;
  }[];
  handleCurrentViewId: (value: any) => void;
  activeTab: string;
}

const HorizontalTabs: React.FC<TabProps> = ({
  tabItems,
  handleCurrentViewId,
  activeTab,
}) => {
  const [value, setValue] = useState(tabItems[0].id);

  const handleChange = (event: SyntheticEvent, newValue: string | number) => {
    setValue(newValue);
    handleCurrentViewId(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabItems.map((tab: any, idx: number) => (
            <Tab
              value={tab.id}
              iconPosition="start"
              icon={
                <img
                  src={activeTab === tab.id ? tab.activeIcon : tab.icon}
                  alt={tab.label}
                  style={{ height: 20, width: 20, objectFit: "contain" }}
                />
              }
              label={tab.label}
              key={tab.id}
              sx={{fontSize:{xs:12,lg:"0.875rem"}}}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default HorizontalTabs;
