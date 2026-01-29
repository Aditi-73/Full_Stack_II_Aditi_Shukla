import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { locations } from '../data/mockData';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  Stack,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

const AreaSelection = () => {
  const navigate = useNavigate();
  const { setSelectedLocation } = useApp();

  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [society, setSociety] = useState('');

  const cities = Object.keys(locations);
  const areas = city ? Object.keys(locations[city]) : [];
  const societies = city && area ? locations[city][area] : [];

  const handleContinue = () => {
    if (!city || !area || !society) {
      alert('Please select city, area, and society to continue');
      return;
    }

    setSelectedLocation({ city, area, society });
    navigate('/dashboard');
  };

  return (
    <Box sx={{ backgroundColor: '#F7F7F2', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            📍
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Select Your Location
          </Typography>
          <Typography variant="body1" sx={{ color: '#4a5568' }}>
            Choose your city, area, and society to view neighborhood verification status
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#B6BDBB',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            p: 4,
          }}
        >
          <Stack spacing={3}>
            {/* City Selection */}
            <FormControl fullWidth>
              <InputLabel sx={{ color: '#4a5568' }}>Select City</InputLabel>
              <Select
                value={city}
                label="Select City"
                onChange={(e) => {
                  setCity(e.target.value);
                  setArea('');
                  setSociety('');
                }}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#89928E',
                    },
                  },
                }}
              >
                <MenuItem value="">-- Choose City --</MenuItem>
                {cities.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Area Selection */}
            <FormControl fullWidth disabled={!city}>
              <InputLabel sx={{ color: '#4a5568' }}>Select Area</InputLabel>
              <Select
                value={area}
                label="Select Area"
                onChange={(e) => {
                  setArea(e.target.value);
                  setSociety('');
                }}
                sx={{
                  backgroundColor: city ? 'white' : '#E0E0E0',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#89928E',
                    },
                  },
                }}
              >
                <MenuItem value="">-- Choose Area --</MenuItem>
                {areas.map((a) => (
                  <MenuItem key={a} value={a}>
                    {a}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Society Selection */}
            <FormControl fullWidth disabled={!area}>
              <InputLabel sx={{ color: '#4a5568' }}>Select Society</InputLabel>
              <Select
                value={society}
                label="Select Society / Locality"
                onChange={(e) => setSociety(e.target.value)}
                sx={{
                  backgroundColor: area ? 'white' : '#E0E0E0',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#89928E',
                    },
                  },
                }}
              >
                <MenuItem value="">-- Choose Society --</MenuItem>
                {societies.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Selected Location Display */}
            {city && area && society && (
              <Alert severity="success" sx={{ backgroundColor: '#C8E6C9', borderColor: '#81C784' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  Selected Location:
                </Typography>
                <Typography variant="body2">
                  {society}, {area}, {city}
                </Typography>
              </Alert>
            )}

            {/* Continue Button */}
            <Button
              onClick={handleContinue}
              disabled={!city || !area || !society}
              variant="contained"
              fullWidth
              sx={{
                background:
                  city && area && society
                    ? 'linear-gradient(135deg, #1A2D29 0%, #254439 100%)'
                    : '#CCCCCC',
                color: city && area && society ? 'white' : '#999',
                py: 2,
                fontSize: '1.125rem',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: city && area && society ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                '&:hover': {
                  boxShadow: city && area && society ? '0 8px 24px rgba(0,0,0,0.25)' : 'none',
                },
              }}
            >
              Continue to Dashboard
            </Button>
          </Stack>
        </Box>

        {/* Info Box */}
        <Alert
          severity="info"
          icon={<InfoIcon />}
          sx={{
            mt: 4,
            backgroundColor: '#E3F2FD',
            borderColor: '#2196F3',
            color: '#1565C0',
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
            Privacy Notice
          </Typography>
          <Typography variant="body2">
            You will see verification status of all registered properties in the selected society. Only
            verification status is visible to maintain privacy. Criminal details are not displayed.
          </Typography>
        </Alert>
      </Container>
    </Box>
  );
};

export default AreaSelection;
