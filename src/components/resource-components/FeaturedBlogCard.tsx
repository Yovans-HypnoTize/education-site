import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ItemMainCard {
  id?: string;
  img?: string;
}

interface ItemChildCardBadges {
  badgeLabel: string;
  badgeIcon: string;
}

interface ItemChildCard {
  date?: string;
  content?: string;
  badges: ItemChildCardBadges[];
  caption?: string;
}

interface FeaturedBlogCardProps {
  item: {
    mainCard: ItemMainCard;
    childCard: ItemChildCard;
    id: string | number;
  };
  allItems?: any;
}

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  item,
  allItems,
}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component={"img"}
        src={item.mainCard.img}
        alt={`${item.mainCard.img}_${item.mainCard.id}`}
        sx={{
          height: { xs: "220px", sm: "300px", md: "400px" },
          width: { xs: "100%", sm: "80%", lg: "70%" },
          borderRadius:3,
          "&:hover":{
            cursor:"pointer"
          }
        }}
         onClick={() => {
          navigate(`/blogs/${item.id}`, { state: allItems });
        }}
      />
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#FFFFFF",
          top: { md: 50, sm: 40, xs: "70%" },
          right: { xl: "10%", lg: 130, sm: 0, xs: 10 },
          width: { sm: 370, xs: 200 },
          height: { md: 300, sm: 220, xs: 170 },
          p: { md: 3, xs: 2 },
          borderRadius: 4,
          boxShadow: 2,
          "&:hover": {
            bgcolor: "#f3f3f3",
            cursor: "pointer",
          },
        }}
        onClick={() => {
          navigate(`/blogs/${item.id}`, { state: allItems });
        }}
      >
        <Typography
          sx={{ color: "#707070", pb: 2, fontSize: { sm: 18, xs: 10 } }}
        >
          {item.childCard.date}
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: { md: 20, xs: 12 } }}>
          {item.childCard.content}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          {item.childCard.badges.map((badge, index: number) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 2,
                }}
                key={`${index}_${badge.badgeLabel}`}
              >
                <img
                  src={badge.badgeIcon}
                  alt={`${badge.badgeLabel}_${index}`}
                  className="resource-blog-badge-icon"
                />
                <Typography
                  key={`${badge.badgeLabel}_${index}`}
                  sx={{ ml: 1, color: "#5580FF", fontSize: { sm: 14, xs: 12 } }}
                >
                  {badge.badgeLabel}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Typography
          sx={{
            pt: { md: 5, sm: 3, xs: 1 },
            color: "#707070",
            fontSize: { sm: 16, xs: 12 },
            "&:hover": {
              color: "#1976d2",
            },
          }}
        >
          {item.childCard.caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturedBlogCard;
