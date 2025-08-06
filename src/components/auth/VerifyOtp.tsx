import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReuButton from "../ReuButton";
import google_icon from "../../assets/google.png";
import facebook_icon from "../../assets/facebook 5.png";
import otpVerification from "../../assets/otpverification.png";

const VerifyOtp = ({ setCardStateToDefault, setCardStateToLogin }: any) => {
  return (
    <>
      {/* Backdrop Overlay */}
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
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "600px", md: "800px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          overflow: "hidden",
          zIndex: 10001,
          minHeight: { xs: "auto", md: "520px" },
        }}
      >
        {/* Left Section - Form */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: "24px", sm: "40px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            my={3}
            sx={{ textAlign: "center" }}
          >
            We sent an OTP to your email. Please check your inbox and enter it.
          </Typography>
          <TextField
            fullWidth
            label="Enter Code"
            type="number"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          <ReuButton
            variant="contained"
            className="login-continue-btn"
            sx={{ padding: "8px", borderRadius: "8px", mt: 2 }}
            //   onClick={() => setCardState('verifyOtp')}
          >
            Continue
          </ReuButton>

          <Typography
            variant="body2"
            color="textSecondary"
            mb={3}
            sx={{ textAlign: "center", mt: 2, fontSize: "13px" }}
          >
            Didn't get the code? Resend in 30 seconds
          </Typography>

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
            }}
            onClick={() => setCardStateToLogin()}
          >
            Already have an account? <span> Sign In </span>
          </Button>

          {/* Hidden Social Login Section */}
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
                    alt="Google Icon"
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
                    alt="Facebook Icon"
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
              // onClick={() => setCardState('continueWithMobile')}
            >
              Continue with Mobile
            </Button>
          </Box>
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
              top: 45,
              right: 15,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
            onClick={() => {
              setCardStateToDefault();
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={otpVerification}
            alt="OTP Verification"
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

export default VerifyOtp;
