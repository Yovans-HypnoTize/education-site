import { Form, Formik } from "formik";
import { ValidationSchemas } from "../../../utils/ValidationSchemas";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  clearPostEnquiryResponse,
  postEnquiry,
} from "../../../features/contactUs/contactUsSlice";
import {
  enquiries,
  knownFromItems,
  typeOfOrganizationItems,
} from "../../../utils/Constants";
import { toast } from "react-toastify";
import { getCountriesList } from "../../../features/master/masterSlice";
import FormField from "../../../components/FormFactory/FormField";
import ReuGradientButton from "../../../components/common-reusable-components/ReuGradientButton";

const EnquiryForm = () => {
  const dispatch = useAppDispatch();
  const [countryList, setCountryList] = useState([]);
  const { postEnquiryResponse } = useAppSelector((state) => state.contactUs);
  const { countries } = useAppSelector((state) => state.master);

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

  useEffect(() => {
    const countryData = tranformData(countries);
    setCountryList(countryData);
  }, [countries]);

  useEffect(() => {
    if (postEnquiryResponse !== null) {
      toast.success(postEnquiryResponse.message);
      dispatch(clearPostEnquiryResponse());
    }
  }, [postEnquiryResponse]);

  return (
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
        onSubmit={(values:any, { resetForm }) => {
          const data = {
            ...values,
            category: values.category?.value,
            countryId: values.countryId?.value,
            typeOfOrganization: values.typeOfOrganization?.value,
            knownFrom: values.knownFrom?.value,
          };
          dispatch(postEnquiry(data));
          resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={3}>
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
              <Grid size={{ xs: 12, lg: 6 }}>
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
                    required: false,
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
                <Box sx={{ textAlign: "end" }}>
                  <ReuGradientButton
                    type="submit"
                    key={"Submit"}
                    variant="contained"
                    sx={{
                      width: 100,
                      py: { sm: 1, xs: 0.3 },
                    }}
                  >
                    Submit
                  </ReuGradientButton>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EnquiryForm;
