import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionItem {
  id: number | string;
  question: string;
  answer: string;
}

interface Props {
  accordionItems: AccordionItem[];
  isShadowed?: boolean;
  bgColor?: string;
}

export default function ReuAccordion({
  accordionItems,
  isShadowed = true,
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
              bgcolor:"transparent"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              sx={{
                borderBottom:
                  item.id !== accordionItems[accordionItems.length - 1].id
                    ? 1
                    : 0,
                borderColor: "#707070",
                minHeight: "auto",
                // backgroundColor: isShadowed ? "#fff" : "transparent",
                color: expanded === panelId ? "#2F5DF5" : "#000",

                // boxShadow: isShadowed
                //   ? "0px 2px 5px rgba(0, 0, 0, 0.1)"
                //   : "none",
                "&.Mui-expanded": {
                  minHeight: "auto",
                },
                // borderRadius: 5,
              }}
            >
              <Typography
                component="span"
                sx={{ fontWeight: 700, fontSize: { xs: 16, lg: 18 } }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "transparent",
                // backgroundColor: bgColor || "#F6F7F9",
                paddingTop: 2,
              }}
            >
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
