import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Box,
  Divider,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUser } from "../../features/user/userSlice";
import { logoutUser } from "../../features/auth/authSlice";

const ProfileMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.user);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    handleClose();
    await navigate("/");
  };

  return (
    <>
      {/* <IconButton onClick={handleOpen}> */}
        {user?.profileImage !== null ? (
          <Avatar
            src={user?.profileImage}
            sx={{ fontSize: 40, border: 1, borderColor: "#d0d0d0", "&:hover": {
              cursor:"pointer"
            }, height:48, width:48 }}
            onClick={handleOpen}
          />
        ) : (
          <Box onClick={handleOpen}>
            <AccountCircleIcon sx={{ fontSize: 40, color: "primary.main","&:hover": {
              cursor:"pointer"
            },height:48, width:48  }} />
          </Box>
        )}
      {/* </IconButton> */}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            width: 320,
            borderRadius: 2,
            mt: 1,
            px: 1,
            py: 1,
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {loading ? (
          <Box px={2} py={2}>
            <Typography variant="body2">Loading...</Typography>
          </Box>
        ) : (
          <Box>
            <Box sx={{ px: 2, py: 2 }}>
              <Box display="flex" alignItems="center" gap={2}>
                {user?.profileImage !== null ? (
                  <Avatar
                    src={user?.profileImage}
                    sx={{
                      width: 40,
                      height: 40,
                      border: 1,
                      borderColor: "#d0d0d0",
                    }}
                    alt={` user_${user?.profileImage}`}
                  />
                ) : (
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
                  >
                    {user?.firstname?.charAt(0) || "U"}
                  </Avatar>
                )}

                <Box>
                  <Typography fontWeight="bold" fontSize="1.1rem">
                    {user?.firstname || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.email || "N/A"}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider />

            <Box display="flex" flexDirection="column" gap={2} px={1} py={1}>
              <MenuItem
                onClick={() => {
                  navigate("/profile");
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <PersonIcon fontSize="medium" />
                </ListItemIcon>
                <Typography fontSize="0.95rem">Your Profile</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/change-password");
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <LockIcon fontSize="medium" />
                </ListItemIcon>
                <Typography fontSize="0.95rem">Change Password</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/support-ticket");
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <ConfirmationNumberIcon fontSize="medium" />
                </ListItemIcon>
                <Typography fontSize="0.95rem">Support Ticket</Typography>
              </MenuItem>
            </Box>

            <Divider />

            <Box display="flex" flexDirection="column" gap={1} px={1} py={1}>
              <MenuItem
                onClick={handleLogout}
              >
                <ListItemIcon>
                  <PowerSettingsNewIcon fontSize="medium" color="error" />
                </ListItemIcon>
                <Typography fontSize="0.95rem" color="error.main">
                  Log Out
                </Typography>
              </MenuItem>
            </Box>
          </Box>
        )}
      </Menu>
    </>
  );
};

export default ProfileMenu;
