import { Button } from "@mui/material";

interface ReuOutlinedButtonProps {
  title: string;
  onClick?: (value: string) => void;
}

const ReuOutlinedButton: React.FC<ReuOutlinedButtonProps> = ({ title }) => {
  return (
    <Button
      sx={{
        color: "#707070",
        border: 1,
        borderColor: "#707070",
        textTransform: "none",
        px: 4,
      }}
    >
      {title}
    </Button>
  );
};

export default ReuOutlinedButton;
