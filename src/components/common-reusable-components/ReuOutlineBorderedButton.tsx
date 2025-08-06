import { Button, ButtonProps, SxProps } from "@mui/material";
import React from "react";

interface ReuOutlineBorderedButtonProps extends ButtonProps {
  children?: any;
  sx?: SxProps;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
}

const ReuOutlineBorderedButton: React.FC<ReuOutlineBorderedButtonProps> = ({
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
        textTransform: "none",
        minWidth: 100,
        fontSize: 17,
        border: variant === "outlined" ? 1 : "none",
        borderRadius: 1.5,
        borderColor: variant === "outlined" ? "gray" : "#1976d2",
        color: variant === "outlined" ? "#000" : "#fff ",
        "&:hover": {
          color: "#ffffff",
          bgcolor: "#1976d2",
          borderColor: "#1976d2",
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

export default ReuOutlineBorderedButton;
