import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ReuDropdownButtonProps {
  buttonText: string;
  buttonVariant?: 'text' | 'outlined' | 'contained';
  menuOptions: string[];
  onOptionSelect?: (option: string) => void;
  sx?: object;
  className?: string; 
}

const ReuDropdownButton: React.FC<ReuDropdownButtonProps> = ({
  buttonText,
  buttonVariant = 'contained',
  menuOptions,
  onOptionSelect,
  sx = {},
  className = '',
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option?: string) => {
    setAnchorEl(null);
    if (option && onOptionSelect) {
      onOptionSelect(option);
    }
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        className={className} 
        sx={{
          textTransform: 'none',
          px: 3,
          background:"transparent linear-gradient(115deg, #00B9F1 0%, #EC008B 56%, #FFCB05 100%) 0% 0% no-repeat padding-box",
          ...sx,

        }}
      >
        {buttonText}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
      >
        {menuOptions.map((option) => (
          <MenuItem sx={{minWidth:'210px'}} key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ReuDropdownButton;
