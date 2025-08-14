import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import { Box } from "@mui/material";

export default function EducationBoardsAccordion({
  tabData,
  handleActiveAccordion,
}: any) {
  const [expanded, setExpanded] = React.useState<string | false>(tabData[0].id);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      handleActiveAccordion(panel);
    };

  return (
    <div>
      {tabData.map((tab: any) => {
        return (
          <>
            <Accordion
              expanded={expanded === tab.id}
              onChange={handleChange(tab.id)}
              disableGutters
              elevation={0}
              square
              sx={{
                borderLeft: 2,
                borderColor: expanded === tab.id ? "#2F5DF5" : "#9C9C9C",
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                  "&.MuiAccordionSummary-root": {
                    height: 0,
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: expanded === tab.id ? "#2F5DF5" : "text.secondary",
                    fontWeight: 600,
                    fontSize:{xs:14,md:16},
                    ml: { lg: 2 },
                  }}
                >
                  {tab.content.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {tab.content.points.map((point: any, idx: number) => (
                  <Box
                    key={`${point.label}_${idx}`}
                    sx={{ display: "flex", mt: 0.5, ml: { lg: 4 } }}
                  >
                    <CircleIcon
                      sx={{
                        height: 12,
                        width: 12,
                        color: "#2F5DF5",
                        mt: 0.7,
                      }}
                    />
                    <Typography sx={{ pl: 2, fontSize: {xs:12,md:14}, lineHeight: 2 }}>
                      {point.label}
                    </Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
            <Box sx={{ height: 20 }} />
          </>
        );
      })}
    </div>
  );
}
