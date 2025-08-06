import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // fontFamily: "'Poppins', sans-serif",
    fontFamily: `"Zoho Puvi", "sans-serif"`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // fontFamily: "'Poppins', sans-serif",
          fontFamily: `"Zoho Puvi", "sans-serif"`,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          // fontFamily: "'Poppins', sans-serif",
          fontFamily: `"Zoho Puvi", "sans-serif"`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // fontFamily: "'Poppins', sans-serif",
          fontFamily: `"Zoho Puvi", "sans-serif"`,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
