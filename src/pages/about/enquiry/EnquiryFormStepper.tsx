import { Box, Button, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import FormField from "../../../components/FormFactory/FormField";
import {
  enquiries,
  knownFromItems,
  typeOfOrganizationItems,
} from "../../../utils/Constants";
import {
  clearPostEnquiryResponse,
  postEnquiry,
} from "../../../features/contactUs/contactUsSlice";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import React, { useEffect, useState } from "react";
import { getCountriesList } from "../../../features/master/masterSlice";
import { ValidationSchemas } from "../../../utils/ValidationSchemas";

export default function EnquiryFormStepper() {
  const dispatch = useAppDispatch();
  const [countryList, setCountryList] = useState([]);
  const { postEnquiryResponse } = useAppSelector((state) => state.contactUs);
  const { countries } = useAppSelector((state) => state.master);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  const tranformData = (listItems: any) => {
    return listItems !== null
      ? listItems.map((item: any) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      : [];
  };

  const handleRevert = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    const countryData = tranformData(countries);
    setCountryList(countryData);
  }, [countries]);

  useEffect(() => {
    if (postEnquiryResponse !== null) {
      setSubmitted(true);
      toast.success(postEnquiryResponse.message);
      handleRevert();
      dispatch(clearPostEnquiryResponse());
    }
  }, [postEnquiryResponse]);

  const handleSubmit = async (values:any) => {
    const data = {
      ...values,
      category: values.category?.value,
      countryId: values.countryId?.value,
      typeOfOrganization: values.typeOfOrganization?.value,
      knownFrom: values.knownFrom ?? "",
    };
    await dispatch(postEnquiry(data));
  };

  return (
    <Box sx={{ py: 3, px: 3, border: "2px solid #1976d2", borderRadius: 5 }}>
      {submitted ? (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 5,
              textAlign: "center",
            }}
          >
            <Box>
              <Typography sx={{ mt: 2, mb: 1, fontWeight: 800 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Thanks for reaching out!
              </Typography>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Our team will contact you within 24 hours.
              </Typography>
            </Box>
          </Box>
        </React.Fragment>
      ) : (
        <Box>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNo: "",
              website: "",
              organisationName: "",
              countryId: "",
              zipcode: "",
              category: "",
              message: "",
              state: "",
              city: "",
              designation: "",
              typeOfOrganization: "",
              knownFrom: "",
            }}
            validationSchema={ValidationSchemas.contactUsValidationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <Grid container columnSpacing={6} rowSpacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      First Name{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "firstName",
                        required: true,
                        placeholder: "Enter your First Name",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Last Name{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "lastName",
                        required: true,
                        placeholder: "Enter your Last Name",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Email{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "email",
                        required: true,
                        placeholder: "Enter your Email",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Mobile Number{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "phoneNo",
                        required: true,
                        placeholder: "Enter your Number",
                        type: "number",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Country{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "select-outlined",
                        name: "countryId",
                        required: true,
                        placeholder: "Select country",
                        type: "text",
                        className: "cpd-input-field",
                        options: countryList,
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      State{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "state",
                        required: true,
                        placeholder: "Enter State Name",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      City{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "city",
                        required: true,
                        placeholder: "Enter City Name",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Zipcode{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "zipcode",
                        required: true,
                        placeholder: "Enter your Zip Code",
                        type: "number",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Organization Name{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "organisationName",
                        required: true,
                        placeholder: "Enter your Organization",
                        type: "text",
                        className: "cpd-input-field",
                        color: "#fff",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>Designation / Role </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "designation",
                        required: false,
                        placeholder: "Enter your Designation",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Website Name{" "}
                      <Box component={"span"} sx={{ color: "gray" }}>
                        (optional)
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textbox-outlined",
                        name: "website",
                        required: true,
                        placeholder: "Enter your website",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Type of Organization{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "select-outlined",
                        name: "typeOfOrganization",
                        required: true,
                        placeholder: "Select",
                        type: "text",
                        className: "cpd-input-field",
                        options: typeOfOrganizationItems,
                      }}
                      formik={formik}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, lg: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      Category{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "select-outlined",
                        name: "category",
                        required: true,
                        placeholder: "Select enquiry",
                        type: "text",
                        className: "cpd-input-field",
                        options: enquiries,
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, lg: 6 }}>
                    <Typography sx={{ mb: 1 }}>
                      How did you hear about us?{" "}
                      <Box component={"span"} sx={{ color: "red" }}>
                        *
                      </Box>
                    </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "radio",
                        name: "knownFrom",
                        required: true,
                        type: "text",
                        className: "cpd-input-field",
                        options: knownFromItems,
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Typography sx={{ mb: 1 }}>Message </Typography>
                    <FormField
                      fieldProps={{
                        fieldType: "textarea-outlined",
                        name: "message",
                        required: true,
                        placeholder: "Your message",
                        type: "text",
                        className: "cpd-input-field",
                      }}
                      formik={formik}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={{ fontWeight: 500, color: "gray" }}>
                        We’ll get in touch soon
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </Box>
  );
}
