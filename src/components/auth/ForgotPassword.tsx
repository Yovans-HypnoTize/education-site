import { Box, Button, IconButton, Typography } from "@mui/material";
import loginpageimage from "../../assets/loginpageimage.png";
import { Form, Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import ReuButton from "../ReuButton";
import * as Yup from "yup";
import ReuTextField from "../ReuTextField";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { forgotPassword } from "../../features/auth/authSlice";
import { useEffect, useRef } from "react";

interface ForgotPasswordProps {
  setCardStateToDefault: () => void;
  setCardStateToLogin: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  setCardStateToDefault,
  setCardStateToLogin,
}) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
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
            px: {xs:"20px",sm:"40px"},
            py:{xs:"20px",sm: "40px"},
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
              setCardStateToDefault();
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
            Forgot Password
          </Typography>
          <Typography
            variant="body2"
            mb={3}
            sx={{ textAlign: "center", visibility: "hidden" }}
          >
            Signup & get 30 days free trial
          </Typography>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(forgotPassword({ email: values.email }))
                .unwrap()
                .then(() => {
                  setCardStateToDefault();
                })
                .catch((error) => {
                  throw error;
                  // console.error("forgot password request failed:", error);
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
              </Form>
            )}
          </Formik>

          <Button
            variant="text"
            sx={{
              my: 3,
              textTransform: "none",
              color: "#111111",
              fontWeight: 600,
              "&:hover": {
                color: "#5580FF",
              },
            }}
            onClick={() => setCardStateToLogin()}
          >
            Back to login
          </Button>
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
              setCardStateToDefault();
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={loginpageimage}
            alt="Forgot Password Image"
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

export default ForgotPassword;
