import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface ReuButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const ReuButton: React.FC<ReuButtonProps> = ({ children, sx, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        textTransform: "none",
        fontFamily: `"Zoho Puvi", "sans-serif"`,
        // fontFamily: "'Stolzl-Regular', sans-serif",
        fontSize: "15px",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default ReuButton;
