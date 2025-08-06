import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface CardContent {
  heading: string;
  textContent: string;
}

interface CardItem {
  id: number;
  img: string;
  content: CardContent;
}

interface ServiceCardProps {
  cardItems: CardItem[];
  columnsPerRow: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  cardItems,
  columnsPerRow,
}) => {
  const columnWidth = Math.floor(12 / columnsPerRow);
  return (
    <Grid container spacing={3} justifyContent={"center"}>
      {cardItems.map((item, index) => (
        <Grid size={{xs:12,sm:6,md:columnWidth}} key={item.id}>
          <Box sx={{ display: "flex" }}>
            <Box>
              <img
                src={item.img}
                alt={`${item.img}_${index}`}
                height={55}
                width={55}
              />
            </Box>
            <Box sx={{ textAlign: "left", pb: 1, px: 2 }}>
              <Typography  sx={{ fontWeight: "bold" }}>
                {item.content.heading}
              </Typography>
              <Typography sx={{ mt: 1 }}>{item.content.textContent}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceCard;
