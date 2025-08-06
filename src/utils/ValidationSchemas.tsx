import * as Yup from "yup";

export const ValidationSchemas = {
  //contact us
  contactUsValidationSchema: Yup.object({
    firstName: Yup.string().required("First name is Required"),
    lastName: Yup.string().required("last name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    phoneNo: Yup.string().required("Required"),
    organisationName: Yup.string().required("Organization is Required"),
    countryId: Yup.object().nullable().required("Country is required"),
    typeOfOrganization: Yup.object().nullable().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    category: Yup.object().nullable().required("Category is required"),
    zipcode: Yup.string().required("zipcode is Required"),
    knownFrom: Yup.string().required("Required"),
  }),

  //support ticket
  supportTicketValidationSchema: Yup.object({
    issue: Yup.string().required("Required"),
    describeIssue: Yup.string().required("Required"),
  }),

  //Profile
  profileValidationSchema: Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  }),
};
