import { Box, Button, IconButton, Typography } from "@mui/material";
import loginpageimage from "../../assets/loginpageimage.png";
import { Form, Formik } from "formik";
// import google_icon from "../../assets/google.png";
// import facebook_icon from "../../assets/facebook 5.png";
import CloseIcon from "@mui/icons-material/Close";
import ReuButton from "../ReuButton";
import * as Yup from "yup";
import ReuTextField from "../ReuTextField";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

interface LoginProps {
  setCardStateToDefault: () => void;
  setCardStateToSignup: () => void;
  setCardStateToForgotPassword: () => void;
}

// interface LoginWithAppItemsProps {
//   id: string;
//   link: string;
//   img: string;
//   img_alt: string;
//   title: string;
// }

// const LoginWithAppItems: LoginWithAppItemsProps[] = [
//   {
//     id: "google",
//     link: `${import.meta.env.VITE_AUTH_URL}/oauth2/authorization/google`,
//     img: google_icon,
//     img_alt: "google",
//     title: "Google",
//   },
//   {
//     id: "fb",
//     link: `${import.meta.env.VITE_AUTH_URL}/oauth2/authorization/facebook`,
//     img: facebook_icon,
//     img_alt: "facebook",
//     title: "Facebook",
//   },
// ];

const Login: React.FC<LoginProps> = ({
  setCardStateToDefault,
  setCardStateToSignup,
  setCardStateToForgotPassword,
}) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
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
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
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
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          overflow: "hidden",
          zIndex: 10001,
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
          height: { xs: 450, md: "600px" },
        }}
      >
        {/* Left Section - Form */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 4, md: "40px" },
            py: { sm: 2, md: "40px" },
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
            // gutterBottom
            sx={{ textAlign: "center", fontWeight: "600", color: "#111111" }}
          >
            Login / Sign In
          </Typography>
          <Typography
            variant="body2"
            mb={{ md: 3 }}
            sx={{ textAlign: "center", visibility: "hidden" }}
          >
            Signup & get 30 days free trial
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(
                loginUser({ email: values.email, password: values.password })
              )
                .unwrap()
                .then(() => {
                  navigate("/");
                  setCardStateToDefault();
                })
                .catch((error) => {
                  throw error;
                  // console.error("Login failed:", error);
                });
            }}
          >
            {({ handleChange, values, errors, touched }) => (
              <Form style={{ width: "100%" }}>
                <ReuTextField
                  name="email"
                  label="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    mb: 2,
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
                    // mt: 2,
                    width: "100%",
                  }}
                >
                  {loading ? "Logging in..." : "Continue"}
                </ReuButton>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", pt: 1 }}
                >
                  <Button
                    variant="text"
                    sx={{
                      textTransform: "none",
                      color: "#5580FF",
                      fontWeight: 600,
                      "&:hover": {
                        color: "#5580FF",
                      },
                      fontSize: { xs: 12, md: 14 },
                    }}
                    onClick={() => setCardStateToForgotPassword()}
                  >
                    Forgot Password?
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          {/* <Divider sx={{ mb: {xs:0,md:3}, mt: {xs:0,md:3}, color: "#000" }}>or</Divider>


          <Grid container spacing={2}>
            {LoginWithAppItems.map((item) => {
              return (
                <Grid size={{xs:6}}>
                  <Box
                    sx={{
                      border: 1,
                      width: {md:175},
                      py: 1,
                      borderRadius: 2,
                      borderColor: "#000",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#000",
                      height: "100%",
                    }}
                    component={"a"}
                    href={item.link}
                  >
                    <img
                      src={item.img}
                      alt={item.img_alt}
                      style={{ width: 20, height: 20 }}
                    />
                    <Box component={"span"} sx={{ ml: 1, mt: 0.5, display:{xs:"none", md:"flex"} }}>
                      {item.title}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid> */}

          <Button
            variant="text"
            sx={{
              textTransform: "none",
              color: "#111111",
              fontWeight: 600,
              "& span": {
                color: "#111111",
                marginLeft: "2%",
              },
              "&:hover span": {
                color: "#5580FF",
              },
              display: { md: "block", xs: "none" },
            }}
            onClick={() => setCardStateToSignup()}
          >
            Don't have an account? <span> Sign up </span>
          </Button>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
                color: "#000",
                textAlign: "center",
              },
            }}
          >
            <Typography sx={{ mt: 1 }}>Don't have an account?</Typography>
            <Typography
              onClick={() => setCardStateToSignup()}
              sx={{ color: "#1976d2" }}
            >
              Sign up
            </Typography>
          </Box>
        </Box>

        {/* Right Section - Image */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
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
              setCardStateToDefault();
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={loginpageimage}
            alt="Login Page Image"
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

export default Login;
