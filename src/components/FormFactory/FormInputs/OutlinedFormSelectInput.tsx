import { FormikProps } from "formik";
import React from "react";
import { FormFieldConfig } from "../../../utils/types";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";

interface OutlinedSelectInputProps {
  fieldProps: FormFieldConfig;
  formikProps: FormikProps<any>;
}

const OutlinedFormSelectInput: React.FC<OutlinedSelectInputProps> = ({
  fieldProps,
  formikProps,
}) => {
  return (
    <>
      <Box>
        <Autocomplete
          size="small"
          className="cpd-input-field"
          disablePortal
          fullWidth
          options={fieldProps.options ?? []}
          value={formikProps.values[fieldProps.name]}
          onChange={
            fieldProps.onChange
              ? fieldProps.onChange
              : (e, value) => formikProps.setFieldValue(fieldProps.name, value)
          }
          onBlur={() => formikProps.setFieldTouched(fieldProps.name, true)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={fieldProps.placeholder}
              name={fieldProps.name}
            />
          )}
        />
      </Box>

      <Box sx={{bg:"red"}}>
        {fieldProps.required &&
          formikProps.touched[fieldProps.name] &&
          formikProps.errors[fieldProps.name] && (
            <Typography sx={{ color: "#D2042D" }}>
              {formikProps.errors[fieldProps.name]}
            </Typography>
          )}
      </Box>
    </>
  );
};

export default OutlinedFormSelectInput;
