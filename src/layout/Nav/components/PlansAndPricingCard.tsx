import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PlansAndPricingCardProps {
  plan: any;
  handleToggleSubmenu: (value: string | null) => void;
}

const PlansAndPricingCard: React.FC<PlansAndPricingCardProps> = ({
  plan,
  handleToggleSubmenu,
}) => {
  const navigate = useNavigate();
  const isActive = location.pathname.endsWith(`/${plan.title.toLowerCase()}`);
  return (
    <Box
      key={plan.title}
      sx={{
        p: 1,
        borderRadius: 2,
        width: 180,
        cursor: "pointer",
        "&:hover": { backgroundColor: "#f5f5f5" },
        bgcolor: isActive ? "#f5f5f5" : "#fff",
      }}
      onClick={() => {
        navigate(`plans-pricing/${plan.id}`);
        handleToggleSubmenu(null);
      }}
    >
      <img
        src={plan.imgSrc}
        width={160}
        height={150}
        style={{ borderRadius: 8 }}
      />
      <Typography fontWeight="bold" mt={1}>
        {plan.title}
      </Typography>
      <Typography fontSize="14px" color="text.secondary">
        {plan.description}
      </Typography>
    </Box>
  );
};

export default PlansAndPricingCard;
