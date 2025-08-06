import { Button, ButtonProps, SxProps } from "@mui/material";
import React from "react";

interface ReuGradientButtonProps extends ButtonProps {
  children?: any;
  sx?: SxProps;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
}

const ReuGradientButton: React.FC<ReuGradientButtonProps> = ({
  children,
  sx,
  onClick,
  variant,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={{
        fontSize: {xs:14,sm:16},
        background:
          variant === "contained"
            ? "#1976d2" //transparent linear-gradient(115deg, #00B9F1 0%, #EC008B 56%, #FFCB05 100%) 0% 0% no-repeat padding-box
            : "#fff",
        border:
          variant === "outlined"
            ? "2px solid rgba(173, 172, 172, 0.52)"
            : "none",
        color: variant === "contained" ? "#fff" : "#000",
        textTransform: "none",
        fontFamily: `"Zoho Puvi", "sans-serif"`,
        // fontFamily: "'Stolzl-Regular', sans-serif",
        fontWeight: 300,
        boxShadow: "none",
        transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
        willChange: "transform",
        "&:hover": {
          color:"#fff",
          boxShadow: "none",
          transform: {sm:"scale(1.10)"},
          cursor: "pointer",
          bgcolor:"#1976d2"
        },
        ...sx,
      }}
      onClick={onClick}
      variant={variant || "contained"}
    >
      {children}
    </Button>
  );
};

export default ReuGradientButton;
