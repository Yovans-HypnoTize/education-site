import React from "react";
import { Menu, MenuItem } from "@mui/material";

interface SubMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  items: string[];
}

const SubMenu: React.FC<SubMenuProps> = ({ anchorEl, open, handleClose, items }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
      {items.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </Menu>
  );
};

export default SubMenu;
