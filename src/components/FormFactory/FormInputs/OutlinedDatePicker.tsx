import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";
import { FormikProps } from "formik";
import { FormFieldConfig } from "../../../utils/types";

interface OutlinedFormInputProps {
  fieldProps: FormFieldConfig & {
    allowFutureDate?: boolean;
    allowPastDate?: boolean;
  };
  formikProps: FormikProps<any>;
}

const OutlinedDatePicker: React.FC<OutlinedFormInputProps> = ({
  fieldProps,
  formikProps,
}) => {
  const shouldDisableDate = (date: Dayjs) => {
    const today = dayjs();

    // Disable future date if not allowed
    if (!fieldProps.allowFutureDate && date.isAfter(today, "day")) {
      return true;
    }

    // Disable past date if not allowed
    if (!fieldProps.allowPastDate && date.isBefore(today, "day")) {
      return true;
    }

    return false;
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            name={fieldProps.name}
            value={formikProps.values[fieldProps.name] || null}
            onChange={
              fieldProps.onChange
                ? fieldProps.onChange
                : (newValue) =>
                    formikProps.setFieldValue(fieldProps.name, newValue)
            }
            shouldDisableDate={shouldDisableDate}
            className={fieldProps.className}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: {
                  "& .MuiPickersSectionList-root": {
                    padding: "10px",
                  },
                },
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>

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

export default OutlinedDatePicker;

