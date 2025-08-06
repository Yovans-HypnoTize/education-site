import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/material";

export interface AccordionItem {
  id: number | string;
  title: string;
  content: string;
  subTitle: string;
  points: Array<any>;
}

interface Props {
  accordionItems: AccordionItem[];
  isShadowed: boolean;
  bgColor: string;
}

export default function QueriesAccordion({
  accordionItems,
  isShadowed,
  bgColor,
}: Props) {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {accordionItems.map((item) => {
        const panelId = `panel${item.id}`;
        return (
          <Accordion
            key={item.id}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            disableGutters
            elevation={0}
            square
            sx={{
              boxShadow: isShadowed ? "initial" : "none",
              border: "none",
              "&:before": {
                display: "none",
              },
              mb: 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              sx={{
                borderBottom: "none",
                minHeight: "auto",
                backgroundColor: isShadowed ? "#fff" : "transparent",
                boxShadow: isShadowed
                  ? "0px 2px 5px rgba(0, 0, 0, 0.1)"
                  : "none",
                "&.Mui-expanded": {
                  minHeight: "auto",
                },
                borderRadius: 1,
              }}
            >
              <Typography
                component="span"
                sx={{ fontWeight: 700, fontSize: { xs: 16, lg: 18 } }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: bgColor || "#F6F7F9",
                paddingTop: 2,
              }}
            >
              <Typography
                sx={{ ml: 1, fontSize: { xs: 14, lg: 16 }, fontWeight: "bold" }}
              >
                {item.subTitle}
              </Typography>
              <Typography variant="body2">{item.content}</Typography>
              {item.points.map((point, idx) => (
                <Box
                  sx={{ display: "flex", alignItems: "center", ml: 1 }}
                  key={`${point}_${idx}`}
                >
                  <FiberManualRecordIcon sx={{ height: 12, width: 12 }} />
                  <Typography sx={{ ml: 1, fontSize: { xs: 14, lg: 16 } }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
