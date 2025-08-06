import { FormikProps } from "formik";
import React from "react";
import { FormFieldConfig } from "../../../utils/types";
import { TextField, Typography } from "@mui/material";

interface OutlinedFormTextAreaInputProps {
  fieldProps: FormFieldConfig;
  formikProps: FormikProps<any>;
}

const OutlinedFormTextAreaInput: React.FC<OutlinedFormTextAreaInputProps> = ({
  fieldProps,
  formikProps,
}) => {
  return (
    <>
      <TextField
        id={fieldProps.name}
        name={fieldProps.name}
        fullWidth
        multiline
        rows={4}
        placeholder={fieldProps.placeholder}
        variant="outlined"
        size="small"
        value={formikProps.values[fieldProps.name]}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
        error={
          formikProps.touched[fieldProps.name] &&
          Boolean(formikProps.errors[fieldProps.name])
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d0d0d0", // Prevent red border
            },
          },
        }}
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

export default OutlinedFormTextAreaInput;
