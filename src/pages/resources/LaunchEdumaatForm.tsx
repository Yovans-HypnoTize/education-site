import { useEffect, useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Box,
  Typography,
  Autocomplete,
  Grid,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SelectOption } from "../../utils/types";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks";
import { registerLaunchEdumaat } from "../../features/resource/resourcesSlice";
import LaunchFormTextField from "../../components/LaunchFormTextField";

const validationSchema = Yup.object({
  instituteName: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required. Please input a valid email."),
  phoneNo: Yup.string()
    .matches(/^\d{10,15}$/, "Enter a valid contact number (10–15 digits)")
    .required("This field is required. Please input a phone number."),
  mode: Yup.string().required("This field is required. Please select a value."),
  arrivalDate: Yup.string().when("mode", {
    is: (val: string) => val !== "Virtual Launch",
    then: (schema) =>
      schema.required("This field is required. Please select a value."),
    otherwise: (schema) => schema.notRequired(),
  }),
  noOfAttendees: Yup.number().when("mode", {
    is: (val: string) => val !== "Virtual Launch",
    then: (schema) =>
      schema
        .required("Number of Attendees is required")
        .min(1, "At least 1 attendee required")
        .max(5, "Maximum of 5 attendees allowed"),
    otherwise: (schema) => schema.notRequired(),
  }),
  registerSubRequest: Yup.array().of(
    Yup.object({
      attendeesName: Yup.string().required("Name is required."),
      attendeesEmail: Yup.string()
        .email("Invalid email format")
        .required("This field is required. Please input a valid email."),
      designation: Yup.string().required(
        "This field is required. Please enter text."
      ),
      phoneNo: Yup.string(),
    })
  ),
});

const LaunchEdumaatForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");

  const steps = ["General Information", "Attendee's Information"];

  // Submit handler
  const handleSubmit = async (values: any, formikProps: any) => {
    const data = {
      ...values,
      mode: values.mode === "Virtual Launch" ? "online" : "offline",
    };
    try {
      setSubmissionStatus("submitting");

      setTimeout(async () => {
        try {
          const response = await dispatch(registerLaunchEdumaat(data)).unwrap();
          setSubmissionStatus("submitted");
          formikProps.resetForm();
          setActiveStep(0);

          setTimeout(() => {
            setSubmissionStatus("idle");
          }, 3000);
        } catch (error) {
          // console.error("Submission failed:", error);
          setSubmissionStatus("idle");
        }
      }, 2000);
    } catch (error) {
      setSubmissionStatus("idle");
    }
  };

  interface FormField {
    id: string;
    name: string;
    label: string;
    fieldType: "text" | "email" | "select" | "number";
    options?: SelectOption[];
    required: boolean;
    placeHolder?: string;
  }

  const generalInfoFields: FormField[] = [
    {
      id: "instituteName",
      name: "instituteName",
      label: "Institution Name",
      fieldType: "text",
      required: true,
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      fieldType: "text",
      required: true,
      placeHolder: "Your Institution Email Address",
    },
    {
      id: "phoneNo",
      name: "phoneNo",
      label: "Contact Number",
      fieldType: "number",
      required: true,
      placeHolder: "Institution Contact Number",
    },
    {
      id: "instituteWebsite",
      name: "instituteWebsite",
      label: "Institution Website",
      fieldType: "text",
      required: false,
    },
    {
      id: "mode",
      name: "mode",
      label: "Mode",
      fieldType: "select",
      options: [
        { label: "Virtual Launch", value: "Virtual Launch" },
        { label: "In Person Launch", value: "In Person Launch" },
      ],
      required: true,
      placeHolder: "Select Your Arrival",
    },
    {
      id: "arrivalDate",
      name: "arrivalDate",
      label: "Your Arrival Date",
      fieldType: "select",
      options: [
        { label: "18/11/2025", value: "18/11/2025" },
        { label: "19/11/2025", value: "19/11/2025" },
        { label: "20/11/2025", value: "20/11/2025" },
      ],
      required: true,
      placeHolder: "Select Your Arrival",
    },
    {
      id: "slot",
      name: "slot",
      label: "Pick Your Slot",
      fieldType: "select",
      options: [
        { label: "10 AM - 01 PM", value: "10 AM - 01 PM" },
        { label: "2 AM - 6 PM", value: "2 AM - 6 PM" },
      ],
      required: false,
      placeHolder: "Pick Your Slot",
    },
  ];

  // Step 1: General Information Form Fields
  const GeneralInformationFields = () => {
    const { values, handleChange, handleBlur, touched, errors, setFieldValue } =
      useFormikContext<any>();

    useEffect(() => {
      if (values.mode === "Virtual Launch") {
        setFieldValue("arrivalDate", "");
        setFieldValue("slot", "");
      }
    }, [values.mode, setFieldValue]);
    return (
      <>
        {generalInfoFields.map((field) => {
          if (
            values.mode === "Virtual Launch" &&
            (field.name === "arrivalDate" || field.name === "slot")
          ) {
            return null;
          }
          return (
            <Box mb={2} key={field.id}>
              {(field.fieldType === "text" || field.fieldType === "number") && (
                <>
                  <TextField
                    id={field.id}
                    label={`${field.label} ${field.required ? "*" : ""}`}
                    name={field.name}
                    type={field.fieldType === "number" ? "number" : "text"}
                    value={values[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="standard"
                    fullWidth
                    placeholder={field.placeHolder || ""}
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "16px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "black",
                      },
                      // Underline border color
                      "& .MuiInput-underline:before": {
                        borderBottom: "1px solid black",
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "1px solid black",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottom: "1px solid black", // Focused underline
                      },
                    }}
                  />
                  {field.required &&
                    touched[field.name] &&
                    errors[field.name] && (
                      <Typography
                        sx={{ color: "#D2042D", fontSize: 12, mt: 1 }}
                      >
                        {errors[field.name]}
                      </Typography>
                    )}
                </>
              )}

              {field.fieldType === "select" && (
                <>
                  <Autocomplete
                    id={field.id}
                    options={field.options || []}
                    value={values[field.name]}
                    onChange={(_, newValue) =>
                      handleChange({
                        target: {
                          name: field.name,
                          value: newValue?.value || "",
                        },
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={`${field.label} ${field.required ? "*" : ""}`}
                        variant="standard"
                        onBlur={handleBlur}
                        placeholder={field.placeHolder || ""}
                        sx={{
                          "& .MuiInputLabel-root": {
                            fontSize: "16px",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: "black",
                          },
                          // Underline border color
                          "& .MuiInput-underline:before": {
                            borderBottom: "1px solid #006ba1",
                          },
                          "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                            {
                              borderBottom: "2px solid #006ba1",
                            },
                          "& .MuiInput-underline:after": {
                            borderBottom: "2px solid #006ba1", // Focused underline
                          },
                        }}
                      />
                    )}
                    slotProps={{
                      paper: {
                        sx: {
                          backgroundColor: "#e6e6e6",
                          "& .MuiAutocomplete-option:hover": {
                            backgroundColor: "#17A8E3 !important",
                            color: "#ffffff",
                          },
                        },
                      },
                    }}
                  />
                  {field.required &&
                    touched[field.name] &&
                    errors[field.name] && (
                      <Typography
                        sx={{ color: "#D2042D", fontSize: 12, mt: 1 }}
                      >
                        {errors[field.name]}
                      </Typography>
                    )}
                </>
              )}
            </Box>
          );
        })}
      </>
    );
  };

  // Step 2: Attendee Information Fields (Dynamic)
  const AttendeeInformationFields = () => {
    const { values, handleChange, handleBlur, touched, errors, setFieldValue } =
      useFormikContext<any>();

    const numAttendees = Number(values.noOfAttendees) || 0;

    // Sync the length of registerSubRequest array
    useEffect(() => {
      const currentLength = values.registerSubRequest.length;
      if (numAttendees > currentLength) {
        const newAttendees = Array(numAttendees - currentLength).fill({
          attendeesName: "",
          attendeesEmail: "",
          designation: "",
          phoneNo: "",
        });
        setFieldValue("registerSubRequest", [
          ...values.registerSubRequest,
          ...newAttendees,
        ]);
      } else if (numAttendees < currentLength) {
        setFieldValue(
          "registerSubRequest",
          values.registerSubRequest.slice(0, numAttendees)
        );
      }
    }, [numAttendees, setFieldValue]);

    return (
      <>
        {values.mode !== "Virtual Launch" && (
          <Box sx={{ mb: 3 }}>
            <TextField
              id="noOfAttendees"
              label="Number Of Attendees"
              name="noOfAttendees"
              value={values.noOfAttendees}
              placeholder="Maximum 5 Attendees"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="standard"
              fullWidth
            />
            {errors.noOfAttendees && touched.noOfAttendees && (
              <Typography sx={{ color: "#D2042D", fontSize: 12, mt: 1 }}>
                {errors.noOfAttendees}
              </Typography>
            )}
          </Box>
        )}

        {values.registerSubRequest.map((_, i) => (
          <Box key={i} mb={4}>
            {values.mode !== "Virtual Launch" && (
              <Typography sx={{ color: "#17a8e3", mb: 2 }}>
                Attendee {i + 1}
              </Typography>
            )}
            <Grid container spacing={4}>
              <Grid size={6}>
                <LaunchFormTextField
                  name={`registerSubRequest[${i}].attendeesName`}
                  label={`Attendee's Name*`}
                  placeholder={`Attendee ${i + 1} Name`}
                  value={values.registerSubRequest[i]?.attendeesName}
                  error={errors.registerSubRequest?.[i]?.attendeesName}
                  touched={touched.registerSubRequest?.[i]?.attendeesName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  key={`${i}_attendeesName`}
                />
              </Grid>
              <Grid size={6}>
                <LaunchFormTextField
                  name={`registerSubRequest[${i}].attendeesEmail`}
                  label={`Attendee's Email Address*`}
                  placeholder={`Attendee ${i + 1} Email Address`}
                  value={values.registerSubRequest[i]?.attendeesEmail}
                  error={errors.registerSubRequest?.[i]?.attendeesEmail}
                  touched={touched.registerSubRequest?.[i]?.attendeesEmail}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  key={`${i}_attendeesName`}
                />
              </Grid>
              <Grid size={6}>
                <LaunchFormTextField
                  name={`registerSubRequest[${i}].designation`}
                  label={`Attendee's Designation*`}
                  placeholder={`Attendee ${i + 1} Designation`}
                  value={values.registerSubRequest[i]?.designation}
                  error={errors.registerSubRequest?.[i]?.designation}
                  touched={touched.registerSubRequest?.[i]?.designation}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  key={`${i}_attendeesName`}
                />
              </Grid>
              <Grid size={6}>
                <LaunchFormTextField
                  name={`registerSubRequest[${i}].phoneNo`}
                  type="number"
                  label={`Attendee's Phone Number*`}
                  placeholder={`Attendee ${i + 1} Phone Number`}
                  value={values.registerSubRequest[i]?.phoneNo}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  key={`${i}_attendeesPhoneNumber`}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </>
    );
  };

  return (
    <Box sx={{ mx: { xs: 5, sm: 25 }, mb: 7 }}>
      <Typography
        sx={{
          color: "#1f7cec",
          fontSize: "1.7rem",
          textAlign: "center",
          mb: 7,
          fontWeight: 500,
        }}
      >
        Register Now
      </Typography>
      {submissionStatus === "submitting" && (
        <Box
          mb={3}
          sx={{
            borderLeft: 3,
            borderColor: "blue",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            px: 1,
            py: 1.5,
            borderRadius: 0.7,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircularProgress size={20} sx={{ ml: 2 }} />
          <Typography fontWeight={500} color="primary" sx={{ ml: 1 }}>
            Submitting...
          </Typography>
        </Box>
      )}

      {submissionStatus === "submitted" && (
        <Box
          mb={3}
          sx={{
            borderLeft: 3,
            borderColor: "#008000",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            px: 1,
            py: 1.5,
            borderRadius: 0.7,
          }}
        >
          <Typography fontSize="14px" sx={{ marginLeft: 2 }}>
            Thank you for connecting us, We will be in touch shortly.
          </Typography>
        </Box>
      )}
      <Formik
        initialValues={{
          instituteName: "",
          email: "",
          phoneNo: "",
          instituteWebsite: "",
          mode: "",
          arrivalDate: "",
          slot: "",
          noOfAttendees: 1,
          registerSubRequest: [
            {
              attendeesName: "",
              attendeesEmail: "",
              designation: "",
              phoneNo: "",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formikProps) => handleSubmit(values, formikProps)}
      >
        {(formikProps) => (
          <Form>
            <Stepper
              activeStep={activeStep}
              sx={{
                my: { xs: 1, sm: 4 },
                ".MuiStep-root": {
                  marginTop: { xs: 0 },
                  marginBottom: { xs: 0 },
                },
              }}
              orientation={isSmallScreen ? "vertical" : "horizontal"}
            >
              {steps.map((label) => (
                <Step
                  key={label}
                  sx={{
                    my: 4,
                    "& .MuiStepLabel-label": {
                      fontSize: { xs: "10px", sm: "12px" },
                    },
                    "& .MuiStepLabel-label.Mui-active": {
                      color: "#17A8E3",
                    },
                    "& .MuiStepLabel-label.Mui-completed": {
                      color: "#17A8E3",
                    },
                    "& .MuiStepIcon-root.Mui-active": {
                      color: "#17A8E3",
                    },
                    "& .MuiStepIcon-root.Mui-completed": {
                      color: "#17A8E3",
                    },
                  }}
                >
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Step 1: General Information */}
            {activeStep === 0 && <GeneralInformationFields />}

            {/* Step 2: Attendee Information */}
            {activeStep === 1 && <AttendeeInformationFields />}

            <Box
              mt={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {activeStep !== 0 && (
                <Button
                  variant="contained"
                  onClick={() => setActiveStep((prev) => prev - 1)}
                  sx={{ mr: 2 }}
                >
                  Previous
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  disabled={submissionStatus === "submitting"}
                  type="button"
                  variant="contained"
                  onClick={async () => {
                    const isValid = await formikProps.validateForm();
                    formikProps.setTouched({
                      noOfAttendees: true,
                      registerSubRequest:
                        formikProps.values.registerSubRequest.map(() => ({
                          attendeesName: true,
                          attendeesEmail: true,
                          designation: true,
                          phoneNo: true,
                        })),
                    });

                    if (Object.keys(isValid).length === 0) {
                      formikProps.handleSubmit();
                    }
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={async () => {
                    const generalFields = [
                      "instituteName",
                      "email",
                      "phoneNo",
                      "mode",
                      "arrivalDate",
                    ];

                    // Mark all fields in step 1 as touched
                    formikProps.setTouched(
                      generalFields.reduce((acc, key) => {
                        acc[key] = true;
                        return acc;
                      }, {} as any)
                    );

                    // Validate the form
                    const errors = await formikProps.validateForm();

                    // Check if any step-1 field has error
                    const step1HasError = generalFields.some(
                      (key) => errors[key]
                    );

                    if (!step1HasError) {
                      setActiveStep((prev) => prev + 1);
                    }
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LaunchEdumaatForm;