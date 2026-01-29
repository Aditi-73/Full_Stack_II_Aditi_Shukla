import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { houses } from '../data/mockData';
import HouseCard from '../components/HouseCard';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Alert,
  Stack,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

const Dashboard = () => {
  const { selectedLocation, isSocietyMember, setIsSocietyMember } = useApp();
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    // Filter houses based on selected location
    if (selectedLocation.society) {
      const filtered = houses.filter(
        (house) => house.society === selectedLocation.society
      );
      setFilteredHouses(filtered);
    } else {
      // Show all houses if no location selected (demo mode)
      setFilteredHouses(houses);
    }
  }, [selectedLocation]);

  return (
    <Box sx={{ minHeight: '100vh', py: 2 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
            Neighborhood Dashboard
          </Typography>
          {selectedLocation.society ? (
            <Typography variant="h6" sx={{ color: '#4a5568' }}>
              {selectedLocation.society}, {selectedLocation.area}, {selectedLocation.city}
            </Typography>
          ) : (
            <Typography variant="h6" sx={{ color: '#4a5568' }}>
              Demo Mode - Viewing Sample Data
            </Typography>
          )}
        </Box>

        {/* Society Member Toggle */}
        <Card
          sx={{
            backgroundColor: '#B6BDBB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            mb: 4,
          }}
        >
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6" sx={{ color: '#1A2D29', fontWeight: 'bold', mb: 0.5 }}>
                Society Member Status
              </Typography>
              <Typography variant="body2" sx={{ color: '#4a5568' }}>
                Toggle if you are a member of this society to see additional verification flags
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={isSocietyMember}
                  onChange={(e) => setIsSocietyMember(e.target.checked)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#4CAF50',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#4CAF50',
                    },
                  }}
                />
              }
              label=""
            />
          </CardContent>
        </Card>

        {isSocietyMember && (
          <Alert severity="success" sx={{ mb: 4, backgroundColor: '#C8E6C9', borderColor: '#81C784' }}>
            <Typography variant="body2">
              ✓ You are viewing as a society member. "Some History" flags will be visible for flagged
              properties.
            </Typography>
          </Alert>
        )}

        {/* Stats Summary */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {[
            { label: 'Total Properties', value: filteredHouses.length },
            {
              label: 'Verified',
              value: filteredHouses.filter((h) => h.statusCity === 'Verified').length,
            },
            {
              label: 'Pending',
              value: filteredHouses.filter((h) => h.statusCity === 'Pending').length,
            },
            {
              label: 'Tenants',
              value: filteredHouses.filter((h) => h.occupantType === 'Tenant').length,
            },
          ].map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  backgroundColor: '#89928E',
                  color: '#F7F7F2',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2">{stat.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Houses Grid */}
        {filteredHouses.length > 0 ? (
          <Grid container spacing={3}>
            {filteredHouses.map((house) => (
              <Grid item xs={12} md={6} lg={4} key={house.id}>
                <HouseCard house={house} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Card sx={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', p: 4 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                🏘️
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                No Properties Found
              </Typography>
              <Typography variant="body2" sx={{ color: '#4a5568' }}>
                No registered properties in the selected location.
              </Typography>
            </CardContent>
          </Card>
        )}

        {/* Info Box */}
        <Alert
          severity="info"
          icon={<InfoIcon />}
          sx={{ mt: 4, backgroundColor: '#E3F2FD', borderColor: '#2196F3', color: '#1565C0' }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
            Privacy & Verification Info
          </Typography>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li>
              <strong>Verified:</strong> Tenant has been verified by local police. Verification is valid
              for 24 months.
            </li>
            <li>
              <strong>Pending:</strong> Verification request has been submitted and is awaiting police
              inspection.
            </li>
            <li>
              <strong>Some History (Society Members Only):</strong> Verification flag detected. Exercise
              caution.
            </li>
            <li>All verification records are stored on blockchain for tamper-proof authentication.</li>
          </ul>
        </Alert>
      </Container>
    </Box>
  );
};

export default Dashboard;
