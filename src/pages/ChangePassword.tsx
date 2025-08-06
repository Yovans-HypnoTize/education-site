import { Button, Typography, Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { changePassword, getUser } from "../features/user/userSlice";
import FormField from "../components/FormFactory/FormField";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(
          /[^a-zA-Z0-9]/,
          "Password must contain at least one special character"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("newPassword"), ""], "Passwords must match"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(changePassword(values)).then((response:any) => {
        if (response?.payload.status === 200) {
          toast.success(response.payload.data.message);
          resetForm();
        }
      });
    },
  });

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Box
      sx={{
        width: "70%",
      }}
    >
      <div className="cpd-section">
        <Typography variant="h5" sx={{ fontWeight: 700, my: 4 }}>
          Change password
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box mt={3}>
            <Grid container>
              <Grid size={{ xs: 12, md: 4 }} fontWeight={700}>
                <Typography sx={{ mb: { xs: 1, md: 0 } }}>
                  New password
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormField
                  fieldProps={{
                    fieldType: "textbox-outlined",
                    name: "newPassword",
                    required: true,
                    placeholder: "New password",
                    type: "text",
                    className: "cpd-input-field",
                  }}
                  formik={formik}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={{ xs: 2, md: 3 }}>
            <Grid container>
              <Grid size={{ xs: 12, md: 4 }} fontWeight={700}>
                <Typography sx={{ mb: { xs: 1, md: 0 } }}>
                  Confirm password
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormField
                  fieldProps={{
                    fieldType: "textbox-outlined",
                    name: "confirmPassword",
                    required: true,
                    placeholder: "Confirm password",
                    type: "password",
                    className: "cpd-input-field",
                    showPasswordAdornment: true,
                  }}
                  formik={formik}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 10 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", sm: "end" },
                  }}
                >
                  <Button
                    variant="contained"
                    className="cpd-get-code"
                    sx={{ minWidth: 120, mt: 2 }}
                    type="submit"
                  >
                    Update
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
    </Box>
  );
}
