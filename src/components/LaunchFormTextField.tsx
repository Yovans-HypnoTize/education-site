import { TextField, Typography } from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";

interface LaunchFormTextFieldProps {
  type?: "text" | "number";
  name: string;
  label: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: FocusEvent<any, Element>) => void;
  touched?: boolean;
  error?: string;
}

const LaunchFormTextField: React.FC<LaunchFormTextFieldProps> = ({
  type,
  name,
  label,
  placeholder,
  value,
  handleChange,
  handleBlur,
  touched,
  error,
}) => {
  return (
    <>
      <TextField
        type={type || "text"}
        name={name}
        label={label}
        placeholder={placeholder}
        variant="standard"
        fullWidth
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        // error={Boolean(touched && error)}
        // helperText={touched && error ? error : ""}
      />
      <Typography sx={{ color: "#D2042D", fontSize: 12, mt: 1 }}>
        {touched && error ? error : ""}
      </Typography>
    </>
  );
};

export default LaunchFormTextField;
