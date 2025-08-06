import { FormikProps } from "formik";
import React, { useState } from "react";
import { FormFieldConfig } from "../../../utils/types";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface OutlinedFormInputProps {
  fieldProps: FormFieldConfig;
  formikProps: FormikProps<any>;
}

const OutlinedFormInput: React.FC<OutlinedFormInputProps> = ({
  fieldProps,
  formikProps,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <OutlinedInput
        id={fieldProps.name}
        name={fieldProps.name}
        value={formikProps.values[fieldProps.name]}
        onChange={
          fieldProps.onChange ? fieldProps.onChange : formikProps.handleChange
        }
        onBlur={formikProps.handleBlur}
        fullWidth
        placeholder={fieldProps.placeholder}
        size="small"
        className={fieldProps.className}
        type={showPassword ? "text" : fieldProps.type}
        endAdornment={
          fieldProps.showPasswordAdornment ? (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
      {fieldProps.required &&
        formikProps.touched[fieldProps.name] &&
        formikProps.errors[fieldProps.name] && (
          <Typography sx={{ color: "#D2042D" }}>
            {formikProps.errors[fieldProps.name]}
          </Typography>
        )}
    </>
  );
};

export default OutlinedFormInput;
