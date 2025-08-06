// components/BackdropLoader.tsx
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const FullscreenBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
  color: '#fff',
}));

interface BackdropLoaderProps {
  open: boolean;
}

const BackdropLoader: React.FC<BackdropLoaderProps> = ({ open }) => {
  return (
    <FullscreenBackdrop open={open}>
      <CircularProgress color="inherit" />
    </FullscreenBackdrop>
  );
};

export default BackdropLoader;
