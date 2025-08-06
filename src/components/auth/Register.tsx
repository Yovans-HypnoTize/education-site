import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import ReuButton from "../ReuButton";
import google_icon from "../../assets/google.png";
import facebook_icon from "../../assets/facebook 5.png";
import continueWithMobileimg from "../../assets/continuewithmobile.png";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks";
import { registerUser } from "../../features/auth/authSlice";
import ReuTextField from "../ReuTextField";
import { useEffect, useRef } from "react";

const Register = ({ setCardStateToDefault, setCardStateToLogin }: any) => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const validationSchemasignup = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string()
      // .matches(/^\d{10,15}$/, "Enter a valid mobile number (10–15 digits)")
      .required("Mobile number is required"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setCardStateToDefault();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* Backdrop Overlay */}
      <Box
        onClick={() => {
          setCardStateToDefault();
        }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      />

      {/* Modal Box */}
      <Box
        ref={modalRef}
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "320px", md: "800px" },
          maxWidth: "90%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          overflow: "hidden",
          zIndex: 10001,
          height: { xs: 450, md: "600px" },
        }}
      >
        {/* Left Section - Form */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 4, md: "30px" },
            py: { xs: 1, md: "30px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            marginTop: {
              xs: 0,
              md: "20%",
            },
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              backgroundColor: "rgba(0,0,0,0.05)",
              display: { xs: "flex", md: "none" },
            }}
            onClick={() => {
              setCardStateToDefault();
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{
              mb: { xs: 2, md: 4 },
              textAlign: "center",
              fontWeight: "600",
              color: "#111111",
            }}
          >
            Register / Sign Up
          </Typography>

          <Formik
            initialValues={{
              name: "",
              email: "",
              mobile: "",
              password: "",
            }}
            validationSchema={validationSchemasignup}
            onSubmit={(values) => {
              const apiValues = {
                name: values?.name,
                email: values?.email,
                phoneNo: values?.mobile,
                password: values?.password,
              };
              dispatch(registerUser(apiValues))
                .unwrap()
                .then(() => {
                  setCardStateToDefault();
                })
                .catch((error) => {
                  throw error;
                  // console.error("Registration failed:", error);
                });
            }}
          >
            {({ handleChange, values, errors, touched }) => (
              <Form style={{ width: "100%" }}>
                <ReuTextField
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  sx={{
                    mb: { xs: 1, md: 2 },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />

                <ReuTextField
                  name="email"
                  label="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    mb: { xs: 1, md: 2 },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />

                <ReuTextField
                  name="mobile"
                  label="Mobile Number"
                  value={values.mobile}
                  onChange={handleChange}
                  error={touched.mobile && Boolean(errors.mobile)}
                  helperText={touched.mobile && errors.mobile}
                  sx={{
                    mb: { xs: 1, md: 2 },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />
                <ReuTextField
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    mb: { xs: 1, md: 2 },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />

                <ReuButton
                  variant="contained"
                  type="submit"
                  className="login-continue-btn"
                  sx={{
                    padding: "8px",
                    borderRadius: "8px",
                    mt: { xs: 1, md: 2 },
                    width: "100%",
                  }}
                >
                  Continue
                </ReuButton>
              </Form>
            )}
          </Formik>
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              mt: { xs: 1, md: 3 },
              color: "#111111",
              fontWeight: 600,
              "& span": {
                color: "#111111",
                marginLeft: "2%",
              },
              "&:hover span": {
                color: "#5580FF",
              },
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            onClick={() => setCardStateToLogin()}
          >
            Already have an account? <span> Sign In </span>
          </Button>
          <Box
            sx={{ display: { xs: "block", md: "none", textAlign: "center" } }}
          >
            <Typography sx={{ color: "#000", mt: 1 }}>
              {" "}
              Already have an account?
            </Typography>
            <Typography
              sx={{ color: "#1976d2" }}
              onClick={() => setCardStateToLogin()}
            >
              Sign In
            </Typography>
          </Box>

          {/* Hidden Section */}
          <Box sx={{ visibility: "hidden" }}>
            <Divider sx={{ mb: 3, mt: 3 }}>or</Divider>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Button
                variant="outlined"
                startIcon={
                  <img
                    src={google_icon}
                    alt="Google"
                    style={{ width: 24, height: 24 }}
                  />
                }
                className="google-login-btn"
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={
                  <img
                    src={facebook_icon}
                    alt="Facebook"
                    style={{ width: 24, height: 24 }}
                  />
                }
                className="google-login-btn"
              >
                Facebook
              </Button>
            </Box>

            <Button
              variant="text"
              sx={{ textTransform: "none", color: "#333", fontWeight: "600" }}
            >
              Continue with Mobile
            </Button>
          </Box>
        </Box>

        {/* Hide image on small screens */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flex: 1,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 45,
              right: 20,
              backgroundColor: "rgba(0,0,0,0.05)",
              display: { xs: "none", md: "flex" },
            }}
            onClick={() => {
              setCardStateToDefault();
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={continueWithMobileimg}
            alt="Continue Watching With Mobile"
            style={{
              flex: 1,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "450px",
              marginTop: "14%",
              marginRight: "0%",
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

export default Register;
