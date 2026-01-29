import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Alert,
  Stack,
  Chip,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const { setUserRole } = useApp();
  const navigate = useNavigate();

  const roles = [
    {
      id: 'resident',
      name: 'Resident / Neighbor',
      icon: '👤',
      description: 'Browse locality, view verification status, and request details',
      color: '#2196F3',
    },
    {
      id: 'owner',
      name: 'Property Owner',
      icon: '🏠',
      description: 'Register property, mark occupancy, and request tenant verification',
      color: '#4CAF50',
    },
    {
      id: 'police',
      name: 'Police Admin',
      icon: '👮',
      description: 'Verify tenants and approve/reject detail requests',
      color: '#2196F3',
    },
  ];

  const handleContinue = () => {
    if (!selectedRole) {
      alert('Please select a role to continue');
      return;
    }

    setUserRole(selectedRole);

    // Navigate based on role
    if (selectedRole === 'resident') {
      navigate('/area');
    } else if (selectedRole === 'owner') {
      navigate('/owner');
    } else if (selectedRole === 'police') {
      navigate('/police');
    }
  };

  const getSelectedRoleColor = (roleId) => {
    const role = roles.find((r) => r.id === roleId);
    return role ? role.color : '#999';
  };

  return (
    <Box sx={{ backgroundColor: '#F7F7F2', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Select Your Role
          </Typography>
          <Typography variant="h6" sx={{ color: '#4a5568' }}>
            Choose how you want to use TenantVerify
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          {roles.map((role) => (
            <Grid item xs={12} sm={6} md={4} sx={{ maxWidth: '300px' }} key={role.id}>
              <Card
                onClick={() => setSelectedRole(role.id)}
                sx={{
                  backgroundColor: '#B6BDBB',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  transform: selectedRole === role.id ? 'scale(1.05)' : 'scale(1)',
                  border: selectedRole === role.id ? `4px solid ${role.color}` : 'none',
                  boxShadow: selectedRole === role.id ? '0 8px 20px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.1)',
                  minHeight: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {role.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#1A2D29', fontWeight: 'bold', mb: 1 }}>
                    {role.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4a5568', mb: 2 }}>
                    {role.description}
                  </Typography>
                  <Chip
                    label={selectedRole === role.id ? '✓ Selected' : 'Select'}
                    sx={{
                      backgroundColor: selectedRole === role.id ? role.color : '#E0E0E0',
                      color: selectedRole === role.id ? 'white' : '#999',
                      fontWeight: 'bold',
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            onClick={handleContinue}
            disabled={!selectedRole}
            variant="contained"
            sx={{
              background: selectedRole
                ? 'linear-gradient(135deg, #1A2D29 0%, #254439 100%)'
                : '#CCCCCC',
              color: selectedRole ? 'white' : '#999',
              px: 6,
              py: 2,
              fontSize: '1.125rem',
              fontWeight: 'bold',
              textTransform: 'none',
              cursor: selectedRole ? 'pointer' : 'not-allowed',
              boxShadow: selectedRole ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              '&:hover': {
                boxShadow: selectedRole ? '0 8px 24px rgba(0,0,0,0.25)' : 'none',
              },
            }}
          >
            Continue
          </Button>
        </Box>

        {/* Info Box */}
        <Alert
          severity="info"
          icon={<InfoIcon />}
          sx={{ backgroundColor: '#E3F2FD', borderColor: '#2196F3', color: '#1565C0' }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
            About Roles
          </Typography>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li>
              <strong>Residents</strong> can browse neighborhoods and view verification status of all properties
            </li>
            <li>
              <strong>Property Owners</strong> can register their properties and request police verification for tenants
            </li>
            <li>
              <strong>Police Admins</strong> verify tenants and review detail requests from residents
            </li>
          </ul>
        </Alert>
      </Container>
    </Box>
  );
};

export default Auth;
