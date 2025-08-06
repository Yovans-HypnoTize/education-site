import { FormikProps } from "formik";
import { FormFieldConfig } from "../../utils/types";
import OutlinedFormInput from "./FormInputs/OutlinedFormInput";
import OutlinedFormSelectInput from "./FormInputs/OutlinedFormSelectInput";
import OutlinedFormTextAreaInput from "./FormInputs/OutlinedFormTextAreaInput";
import OutlinedDatePicker from "./FormInputs/OutlinedDatePicker";
import FormRadioInput from "./FormInputs/FormRadioInput";

const FormField: React.FC<{
  formik: FormikProps<any>;
  fieldProps: FormFieldConfig;
}> = ({ formik, fieldProps }) => {
  if (fieldProps.fieldType === "textbox-outlined") {
    return (
      <OutlinedFormInput
        fieldProps={fieldProps}
        formikProps={formik}
        key={"textbox-outlined"}
      />
    );
  } else if (fieldProps.fieldType === "select-outlined") {
    return (
      <OutlinedFormSelectInput
        fieldProps={fieldProps}
        formikProps={formik}
        key={"select-outlined"}
      />
    );
  } else if (fieldProps.fieldType === "textarea-outlined") {
    return (
      <OutlinedFormTextAreaInput
        fieldProps={fieldProps}
        formikProps={formik}
        key={"select-outlined"}
      />
    );
  } else if (fieldProps.fieldType === "datepicker-outlined") {
    return (
      <OutlinedDatePicker
        fieldProps={fieldProps}
        formikProps={formik}
        key={"select-outlined"}
      />
    );
  } else if (fieldProps.fieldType === "radio") {
    return (
      <FormRadioInput
        fieldProps={fieldProps}
        formikProps={formik}
        key={"radio"}
      />
    );
  } else {
    return <>Nothing to render</>;
  }
};

export default FormField;
