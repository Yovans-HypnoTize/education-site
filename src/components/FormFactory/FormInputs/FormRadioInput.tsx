import { FormikProps } from "formik";
import React from "react";
import { FormFieldConfig } from "../../../utils/types";
import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface FormRadioInputProps {
  fieldProps: FormFieldConfig;
  formikProps: FormikProps<any>;
}

const FormRadioInput: React.FC<FormRadioInputProps> = ({
  fieldProps,
  formikProps,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formikProps.setFieldValue(fieldProps.name, event.target.value);
  };

  return (
    <FormControl
      fullWidth
      component="fieldset"
      error={
        fieldProps.required &&
        formikProps.touched[fieldProps.name] &&
        Boolean(formikProps.errors[fieldProps.name])
      }
    >
      {fieldProps.label && (
        <FormLabel component="legend">{fieldProps.label}</FormLabel>
      )}

      <RadioGroup
        row
        name={fieldProps.name}
        value={formikProps.values[fieldProps.name]}
        onChange={fieldProps.onChange || handleChange}
        onBlur={() => formikProps.setFieldTouched(fieldProps.name, true)}
      >
        {fieldProps.options?.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio size="small" />}
            label={option.label}
          />
        ))}
      </RadioGroup>

      {fieldProps.required &&
        formikProps.touched[fieldProps.name] &&
        formikProps.errors[fieldProps.name] && (
          <Typography sx={{ color: "#D2042D", mt: 1 }}>
            {formikProps.errors[fieldProps.name]}
          </Typography>
        )}
    </FormControl>
  );
};

export default FormRadioInput;
