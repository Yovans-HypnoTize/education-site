import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme.ts'
import { CssBaseline  } from '@mui/material'
import './index.css'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <React.StrictMode>
          <App />
      </React.StrictMode>
      <ToastContainer position="top-right" autoClose={3000} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
  ,
)
