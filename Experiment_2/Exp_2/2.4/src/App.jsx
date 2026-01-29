import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Container, 
  Box, 
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Disabled', href: '#', disabled: true }
  ];

  const drawerContent = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} button disabled={item.disabled}>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Mobile View - Vertical Navbar */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Navbar
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Box>

      {/* Desktop View - Horizontal Navbar */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <AppBar position="static" sx={{ bgcolor: '#f5f5f5' }}>
          <Toolbar sx={{ color: '#000' }}>
            <Typography variant="h6" sx={{ flexGrow: 0, mr: 3, fontWeight: 'bold' }}>
              Navbar
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  disabled={item.disabled}
                  sx={{
                    color: item.disabled ? '#999' : '#000',
                    '&:hover': {
                      bgcolor: '#e0e0e0'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '2px solid #1976d2',
                  outline: 'none'
                }}
              />
              <Button
                variant="outlined"
                color="primary"
                startIcon={<SearchIcon />}
                sx={{
                  borderColor: '#1976d2',
                  color: '#1976d2'
                }}
              >
                Search
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Main Content */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Responsive Navigation Bar
        </Typography>
        <Typography variant="body1" color="textSecondary">
          This navigation bar is fully responsive. On mobile devices, it shows a hamburger menu (vertical layout). On desktop, it displays a horizontal navigation bar with search functionality.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>Features:</Typography>
          <ul>
            <li>Responsive design - adapts to screen size</li>
            <li>Material UI components</li>
            <li>Search functionality</li>
            <li>Disabled menu items</li>
            <li>Mobile-friendly hamburger menu</li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
