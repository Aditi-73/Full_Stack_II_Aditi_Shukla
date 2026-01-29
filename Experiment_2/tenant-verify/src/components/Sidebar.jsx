import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Paper,
  IconButton,
  Collapse,
} from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

const Sidebar = () => {
  const { userRole, sidebarWidth, setSidebarWidth } = useApp();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleSidebarWidth = (expand) => {
    if (expand) {
      setSidebarWidth(Math.min(sidebarWidth + 50, 400));
    } else {
      setSidebarWidth(Math.max(sidebarWidth - 50, 150));
    }
  };

  // Common navigation items for all roles
  const commonLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/neighborhood', label: 'Neighborhood / Houses', icon: '🏘️' },
    { path: '/my-requests', label: 'My Requests', icon: '📝' },
  ];

  // Role-specific sections
  const getRoleSpecificLinks = () => {
    if (userRole === 'owner') {
      return [
        { section: 'Owner Tools', links: [
          { path: '/owner/properties', label: 'My Properties', icon: '🏠' },
          { path: '/owner/tenant-requests', label: 'Tenant Requests', icon: '📋' },
        ]},
      ];
    }
    if (userRole === 'police') {
      return [
        { section: 'Police Tools', links: [
          { path: '/police/queue', label: 'Verification Queue', icon: '👮' },
          { path: '/police/history', label: 'History Requests', icon: '📜' },
        ]},
      ];
    }
    return [];
  };

  const roleSpecificSections = getRoleSpecificLinks();

  // Additional sections
  const additionalLinks = [
    { path: '/blockchain', label: 'Blockchain / Audit Logs', icon: '⛓️' },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          zIndex: 1200,
          transition: 'width 0.3s ease',
          '& .MuiDrawer-paper': {
            width: sidebarWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1A2D29',
            color: '#F7F7F2',
            top: '64px',
            height: 'calc(100vh - 64px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            overflowY: 'auto',
          },
        }}
      >
        <Box sx={{ padding: '24px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
            <span style={{ fontSize: '1.5rem' }}>🧭</span>
            <span>Navigation</span>
          </Typography>

          {/* Common Navigation */}
          <List>
            {commonLinks.map((link) => (
              <ListItem key={link.path} disablePadding sx={{ marginBottom: '8px' }}>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  sx={{
                    borderRadius: '8px',
                    backgroundColor: isActive(link.path) ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    color: '#ffffff',
                    fontWeight: isActive(link.path) ? '600' : '500',
                    boxShadow: isActive(link.path) ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                    '& .MuiListItemText-primary': {
                      color: '#ffffff',
                    },
                    '& .MuiListItemText-secondary': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}  
          </List>

          {/* Role-Specific Sections */}
          {roleSpecificSections.map((section, idx) => (
            <Box key={idx} sx={{ marginTop: '24px' }}>
              <Divider sx={{ marginTop: '24px', marginBottom: '16px', borderColor: 'rgba(182, 189, 187, 0.3)' }} />
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: '8px',
                  paddingLeft: '16px',
                }}
              >
                {section.section}
              </Typography>
              <List>
                {section.links.map((link) => (
                  <ListItem key={link.path} disablePadding sx={{ marginBottom: '8px' }}>
                    <ListItemButton
                      component={Link}
                      to={link.path}
                      sx={{
                        borderRadius: '8px',
                        backgroundColor: isActive(link.path) ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                        color: '#ffffff',
                        fontWeight: isActive(link.path) ? '600' : '500',
                        boxShadow: isActive(link.path) ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                        '& .MuiListItemText-primary': {
                          color: '#ffffff',
                        },
                        '& .MuiListItemText-secondary': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: '#ffffff',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>{link.icon}</ListItemIcon>
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}  
              </List>
            </Box>
          ))}

          {/* Additional Links */}
          <Box sx={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(182, 189, 187, 0.3)' }}>
            <List>
              {additionalLinks.map((link) => (
                <ListItem key={link.path} disablePadding sx={{ marginBottom: '8px' }}>
                  <ListItemButton
                    component={Link}
                    to={link.path}
                    sx={{
                      borderRadius: '8px',
                      backgroundColor: isActive(link.path) ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                      color: '#ffffff',
                      fontWeight: isActive(link.path) ? '600' : '500',
                      boxShadow: isActive(link.path) ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                      '& .MuiListItemText-primary': {
                        color: '#ffffff',
                      },
                      '& .MuiListItemText-secondary': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Privacy & Transparency Info Card */}
          <Paper
            elevation={0}
            sx={{
              marginTop: '24px',
              backgroundColor: 'rgba(45, 95, 111, 0.2)',
              borderLeft: '3px solid #254439',
              padding: '16px',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
              <span>🔒</span>
              <span>Privacy & Transparency</span>
            </Typography>
            <Typography variant="caption" sx={{ color: '#FFFFFF', lineHeight: 1.6 }}>
              All data is blockchain-verified and immutable. Only verification status is visible to protect privacy.
            </Typography>
          </Paper>
        </Box>
      </Drawer>

      {/* Sidebar Resize Buttons */}
      <Box
        sx={{
          position: 'fixed',
          left: '8px',
          bottom: '16px',
          zIndex: 40,
          display: 'flex',
          gap: '8px',
        }}
      >
        <IconButton
          onClick={() => toggleSidebarWidth(false)}
          size="small"
          sx={{
            backgroundColor: '#254439',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&:hover': {
              backgroundColor: 'rgba(37, 68, 57, 0.8)',
            },
          }}
          title="Collapse sidebar"
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={() => toggleSidebarWidth(true)}
          size="small"
          sx={{
            backgroundColor: '#254439',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&:hover': {
              backgroundColor: 'rgba(37, 68, 57, 0.8)',
            },
          }}
          title="Expand sidebar"
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Sidebar;
