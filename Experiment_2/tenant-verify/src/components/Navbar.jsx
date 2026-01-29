import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Badge,
  Box,
  Stack,
  Chip,
  Paper,
  Typography,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';

const Navbar = () => {
  const { userRole } = useApp();
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [notifAnchor, setNotifAnchor] = useState(null);

  const notifications = [
    { id: 1, message: 'Tenant verification approved', time: '2 hours ago' },
    { id: 2, message: 'New verification request received', time: '5 hours ago' },
    { id: 3, message: 'Property inspection scheduled', time: '1 day ago' },
  ];

  const getQuickAction = () => {
    if (userRole === 'resident') return { path: '/request-details', label: 'Request Details', icon: '📋' };
    if (userRole === 'owner') return { path: '/owner/add-tenant', label: 'Add Tenant', icon: '➕' };
    if (userRole === 'police') return { path: '/police/review', label: 'Review Requests', icon: '🔍' };
    return null;
  };

  const quickAction = getQuickAction();

  return (
    <AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: '#1A2D29', top: 0, left: 0, right: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: { xs: '56px', sm: '60px' },
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo/2.png"
            alt="TenantVerify"
            style={{ width: '108px', height: '76px', objectFit: 'contain' }}
          />
        </Link>

        {/* Right Side Actions */}
        <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
          {userRole && (
            <>
              {/* Role Indicator */}
              <Chip
                label={`Role: ${userRole}`}
                variant="outlined"
                sx={{
                  backgroundColor: 'rgba(45, 95, 111, 0.2)',
                  borderColor: 'rgba(45, 95, 111, 0.3)',
                  color: '#F7F7F2',
                  textTransform: 'capitalize',
                  fontWeight: 600,
                }}
              />

              {/* Quick Action Button */}
              {quickAction && (
                <Button
                  component={Link}
                  to={quickAction.path}
                  variant="contained"
                  sx={{
                    backgroundColor: '#F7F7F2',
                    color: '#254439',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      backgroundColor: '#E0E0E0',
                    },
                  }}
                >
                  <span style={{ marginRight: '8px' }}>{quickAction.icon}</span>
                  {quickAction.label}
                </Button>
              )}

              {/* Notifications Menu */}
              <Button
                onClick={(e) => setNotifAnchor(e.currentTarget)}
                sx={{ color: '#F7F7F2', minWidth: 'auto' }}
              >
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </Button>
              <Menu
                anchorEl={notifAnchor}
                open={Boolean(notifAnchor)}
                onClose={() => setNotifAnchor(null)}
                PaperProps={{
                  sx: {
                    width: '320px',
                    maxHeight: '400px',
                    backgroundColor: '#1A2D29',
                    color: '#F7F7F2',
                  },
                }}
              >
                <Box sx={{ padding: '12px', borderBottom: '1px solid rgba(45, 95, 111, 0.3)' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#F7F7F2' }}>
                    Notifications
                  </Typography>
                </Box>
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <MenuItem key={notif.id} sx={{ flexDirection: 'column', alignItems: 'flex-start', color: '#F7F7F2' }}>
                      <Typography variant="body2" sx={{ color: '#F7F7F2' }}>{notif.message}</Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {notif.time}
                      </Typography>
                    </MenuItem>
                  ))
                ) : (
                  <Box sx={{ padding: '24px', textAlign: 'center', color: 'rgba(247, 247, 242, 0.6)' }}>
                    No notifications
                  </Box>
                )}
              </Menu>

              {/* User Profile Menu */}
              <Button
                onClick={(e) => setProfileAnchor(e.currentTarget)}
                sx={{ color: '#F7F7F2', minWidth: 'auto' }}
              >
                <AccountCircleIcon />
              </Button>
              <Menu
                anchorEl={profileAnchor}
                open={Boolean(profileAnchor)}
                onClose={() => setProfileAnchor(null)}
                PaperProps={{
                  sx: {
                    backgroundColor: '#1A2D29',
                    color: '#F7F7F2',
                  },
                }}
              >
                <MenuItem sx={{ color: '#ffffff' }} component={Link} to="/profile" onClick={() => setProfileAnchor(null)}>
                  👤 Profile
                </MenuItem>
                <MenuItem sx={{ color: '#ffffff' }} component={Link} to="/auth" onClick={() => setProfileAnchor(null)}>
                  🔄 Switch Role
                </MenuItem>
                <MenuItem sx={{ color: '#ffffff' }} onClick={() => setProfileAnchor(null)}>
                  🚪 Logout
                </MenuItem>
              </Menu>
            </>
          )}

          {!userRole && (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              sx={{
                backgroundColor: '#F7F7F2',
                color: '#254439',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#E0E0E0',
                },
              }}
            >
              Get Started
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
