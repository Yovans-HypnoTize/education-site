import { useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useMediaQuery, useTheme } from "@mui/material";

const ReuTextField = (props: TextFieldProps) => {
  const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
const fieldSize = isSmallScreen ? "small" : "medium";
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = props.type === "password";

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <TextField
    size={fieldSize}
      fullWidth
      variant="outlined"
      {...props}
      type={isPasswordField && !showPassword ? "password" : "text"}
      InputProps={{
        ...props.InputProps,
        endAdornment: isPasswordField ? (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : (
          props.InputProps?.endAdornment
        ),
      }}
    />
  );
};

export default ReuTextField;
