import { Box, IconButton, Typography } from "@mui/material";
import loginpageimage from "../../assets/loginpageimage.png";
import { Form, Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import ReuButton from "../ReuButton";
import * as Yup from "yup";
import ReuTextField from "../ReuTextField";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { resetPassword } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { loading } = useAppSelector((state) => state.auth);
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("New Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
    password: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 9999,
        }}
      />

      {/* Modal Box */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          maxWidth: "90%",
          display: "flex",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          overflow: "hidden",
          zIndex: 10001,
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        {/* Left Section - Form */}
        <Box
          sx={{
            flex: 1,
            px: { xs: "20px", sm: "40px" },
            py: { xs: "20px", sm: "40px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              backgroundColor: "rgba(0,0,0,0.05)",
              display: { xs: "flex", sm: "none" },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "600", color: "#111111" }}
          >
            Reset Password
          </Typography>
          <Typography
            variant="body2"
            mb={3}
            sx={{ textAlign: "center", visibility: "hidden" }}
          >
            Signup & get 30 days free trial
          </Typography>

          <Formik
            initialValues={{ newPassword: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(
                resetPassword({
                  newPassword: values.newPassword,
                  confirmPassword: values.password,
                  token: token,
                })
              )
                .unwrap()
                .then(() => {
                  navigate("/");
                })
                .catch((error) => {
                  throw error;
                  // console.error("reset failed:", error);
                });
              resetForm();
            }}
          >
            {({ handleChange, values, errors, touched }) => (
              <Form style={{ width: "100%" }}>
                <ReuTextField
                  name="newPassword"
                  label="Enter New Password"
                  value={values.newPassword}
                  onChange={handleChange}
                  error={touched.newPassword && Boolean(errors.newPassword)}
                  helperText={touched.newPassword && errors.newPassword}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />

                <ReuTextField
                  name="password"
                  label="Confirm Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />

                <ReuButton
                  type="submit"
                  variant="contained"
                  className="login-continue-btn"
                  sx={{
                    padding: "8px",
                    borderRadius: "8px",
                    mt: 2,
                    width: "100%",
                  }}
                >
                  {loading ? "Submitting ..." : "Continue"}
                </ReuButton>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", pt: 1 }}
                ></Box>
              </Form>
            )}
          </Formik>
        </Box>

        {/* Right Section - Image */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flex: 1,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 50,
              right: 20,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
            onClick={() => {
              navigate("/");
              // setCardStateToDefault();
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={loginpageimage}
            alt="Reset Password Image"
            style={{
              flex: 1,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "450px",
              marginTop: "16%",
              marginRight: "5%",
            }}
          />
        </Box>
      </Box>

      {/* Disable Scroll */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1000,
        }}
      />
    </>
  );
};

export default ResetPassword;
