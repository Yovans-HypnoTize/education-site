import { Button, Typography, Box, Grid } from "@mui/material";
import unknownUserImage from "../assets/unknownUserImage.png";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  getUser,
  // updateProfileImage,
  updateUser,
} from "../features/user/userSlice";
import { useFormik } from "formik";
import FormField from "../components/FormFactory/FormField";
import ReuGradientButton from "../components/common-reusable-components/ReuGradientButton";
import { ValidationSchemas } from "../utils/ValidationSchemas";
import { getCountriesList } from "../features/master/masterSlice";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import LazyImage from "../components/LazyImage";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { countries } = useAppSelector((state) => state.master);
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [countryList, setCountryList] = useState([]);
  const photoRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: user?.firstname || "",
      email: user?.email || "",
      phoneNo: user?.phoneNo || "",
      gender: genderOptions?.find((g) => g.value === user?.gender) || null,
      dob: user?.dob ? dayjs(user.dob) : null,
      address: user?.address || "",
      pinCode: user?.pinCode || "",
      countryId: countries?.find((c: any) => c.name === user?.country)
        ? {
            label: user.country,
            value: countries?.find((c: any) => c.name === user?.country)?.id,
          }
        : null,
      state: user?.state || "",
      city: user?.city || "",
    },
    enableReinitialize: true,
    validationSchema: ValidationSchemas.profileValidationSchema,
    onSubmit: (values, { resetForm }) => {
  const formData = new FormData();

  // Append image file if exists
  if (photoRef?.current?.files[0]) {
    formData.append("files", photoRef.current.files[0]);
  }

  // Prepare and append each field from values
  formData.append("gender", values.gender?.value || "");
  formData.append("countryId", values.countryId?.value || "");
  formData.append("dob", values.dob ? dayjs(values.dob).format("YYYY-MM-DD") : "");

  // Append remaining simple values (you can destructure if needed)
  Object.entries(values).forEach(([key, value]) => {
    if (!["gender", "countryId", "dob"].includes(key)) {
      formData.append(key, value);
    }
  });

  dispatch(updateUser(formData))
    .unwrap()
    .then((response) => {
      toast.success(response.data.message);
      dispatch(getUser());
      resetForm();
    });
}

    // onSubmit: (values, { resetForm }) => {
    //   const formData = new FormData();
    //     if (photoRef?.current?.files[0]) {
    //   formData.append("profileImage", photoRef?.current?.files[0]);
    // }
    //   const data = {
    //     ...values,
    //     gender: values.gender?.value,
    //     countryId: values.countryId?.value,
    //     dob: values.dob ? dayjs(values.dob).format("YYYY-MM-DD") : null,
    //   };

    //   dispatch(updateUser(data))
    //     .unwrap()
    //     .then((response) => {
    //       toast.success(response.data.message);
    //       dispatch(getUser());
    //       resetForm();
    //     });
    // },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const formData = new FormData();
    const file = e.target.files?.[0];

    // if (photoRef?.current?.files[0]) {
    //   formData.append("profileImage", photoRef?.current?.files[0]);
    // }

    // dispatch(updateProfileImage(formData))
    //   .unwrap()
    //   .then(() => {
    //     dispatch(getUser());
    //   });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  useEffect(() => {
    const transformData =
      countries !== null
        ? countries.map((item: any) => {
            return {
              label: item.name,
              value: item.id,
            };
          })
        : [];
    setCountryList(transformData);
  }, [countries]);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="cpd-section">
          <Typography variant="h5" sx={{ fontWeight: 700, my: 4 }}>
            Your Profile
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <LazyImage src={previewImage || user?.profileImage || unknownUserImage}
              alt="unknown-user"
              style={{ height: 80, width: 80, borderRadius: "50%" }}/>
            {/* <img
              src={previewImage || user?.profileImage || unknownUserImage}
              alt="unknown-user"
              style={{ height: 80, width: 80, borderRadius: "50%" }}
            /> */}
            <Box mt={2}>
              <input
                type="file"
                ref={photoRef}
                hidden
                onChange={(e) => {
                  handleImageChange(e);
                  formik.handleChange(e);
                }}
              />
              <Button
                variant="outlined"
                className="cpd-get-code"
                sx={{
                  minWidth: 160,
                  color: "#000",
                  border: 2,
                  borderColor: "#5580FF",
                  textTransform: "none",
                  fontWeight: 600,
                }}
                onClick={() => {
                  photoRef?.current?.click();
                }}
              >
                Change photo
              </Button>
            </Box>
          </Box>

          <Box mt={4}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                Name
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "textbox-outlined",
                    name: "name",
                    required: true,
                    placeholder: "Enter Name",
                    type: "text",
                    className: "cpd-input-field",
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                Email
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "textbox-outlined",
                    name: "email",
                    required: true,
                    placeholder: "Enter Email",
                    type: "text",
                    className: "cpd-input-field",
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={{xs:12,sm:3}} fontWeight={700}>
                Mobile Number
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "textbox-outlined",
                    name: "phoneNo",
                    required: true,
                    placeholder: "Enter Contact Number",
                    type: "text",
                    className: "cpd-input-field",
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                Gender
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "select-outlined",
                    name: "gender",
                    required: true,
                    placeholder: "Select Gender",
                    type: "text",
                    className: "cpd-input-field",
                    options: genderOptions,
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                Address
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "textbox-outlined",
                    name: "address",
                    required: true,
                    placeholder: "Enter Address",
                    type: "text",
                    className: "cpd-input-field",
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                Pincode
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "textbox-outlined",
                    name: "pinCode",
                    required: true,
                    placeholder: "Enter Pincode",
                    type: "text",
                    className: "cpd-input-field",
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                Country
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "select-outlined",
                    name: "countryId",
                    required: true,
                    placeholder: "Select Country",
                    type: "text",
                    className: "cpd-input-field",
                    options: countryList,
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                State
              </Grid>
              <Grid size={{xs:12,sm:6}}>
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
            </Grid>
          </Box>

          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                City
              </Grid>
              <Grid size={{xs:12,sm:6}}>
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
            </Grid>
          </Box>

          <Box mt={{xs:2,sm:3}}>
            <Grid container>
              <Grid size={3} fontWeight={700}>
                DOB
              </Grid>
              <Grid size={{xs:12,sm:6}}>
                <FormField
                  fieldProps={{
                    fieldType: "datepicker-outlined",
                    name: "dob",
                    required: true,
                    placeholder: "Select dob",
                    type: "text",
                    className: "cpd-input-field",
                    allowFutureDate: false,
                    allowPastDate: true,
                  }}
                  formik={formik}
                />
                <Box sx={{ display: "flex", justifyContent: {xs:"left",sm:"end"}, mt: 2 }}>
                  <ReuGradientButton variant="contained" type="submit">
                    Submit
                  </ReuGradientButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </form>
    </Box>
  );
};

export default Profile;
