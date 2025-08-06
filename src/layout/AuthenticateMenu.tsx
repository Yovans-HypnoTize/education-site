import { Box, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { label: 'Your Profile', icon: <PersonIcon />, path: '/profile' },
  { label: 'Change Password', icon: <LockIcon />, path: '/change-password' },
  { label: 'Support Ticket', icon: <ConfirmationNumberIcon />, path: '/support-ticket' },
];

const AuthenticateMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        position:'relative',
        top:'100px',
        width: 240,
        bgcolor: '#EDF2FF',
        p: 2,
        borderRadius: 2,
        minHeight:'550px'
      }}
    >
      <List>
        {menuItems.map(({ label, icon, path }) => {
          const isActive = location.pathname === path;

          return (
            <ListItemButton
              key={label}
              onClick={() => navigate(path)}
              selected={isActive}
              sx={{
                mb: 1.5,
                borderRadius: 1,
                ...(isActive && {
                  border: `1px solid ${theme.palette.primary.main}`,
                  backgroundColor: 'white',
                }),
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
              <ListItemText primary={label} primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default AuthenticateMenu;
