// This file contains complete Material-UI converted code for all remaining pages
// Copy each page's code and replace the existing files

// ============================================
// 1. PAGES/DASHBOARD.JSX
// ============================================

import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { houses } from '../data/mockData';
import HouseCard from '../components/HouseCard';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Switch,
  FormControlLabel,
  Stack,
  Card,
  CardContent,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import BadgeIcon from '@mui/icons-material/Badge';
import InfoIcon from '@mui/icons-material/Info';

const Dashboard = () => {
  const { selectedLocation, isSocietyMember, setIsSocietyMember } = useApp();
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    if (selectedLocation.society) {
      const filtered = houses.filter((house) => house.society === selectedLocation.society);
      setFilteredHouses(filtered);
    } else {
      setFilteredHouses(houses);
    }
  }, [selectedLocation]);

  const stats = {
    total: filteredHouses.length,
    verified: filteredHouses.filter((h) => h.statusCity === 'Verified').length,
    pending: filteredHouses.filter((h) => h.statusCity === 'Pending').length,
    tenants: filteredHouses.filter((h) => h.occupantType === 'Tenant').length,
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#1A2D29', mb: 1 }}>
            Neighborhood Dashboard
          </Typography>
          {selectedLocation.society ? (
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
              {selectedLocation.society}, {selectedLocation.area}, {selectedLocation.city}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
              Demo Mode - Viewing Sample Data
            </Typography>
          )}
        </Box>

        {/* Society Member Toggle */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Society Member Status
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Toggle if you are a member of this society to see additional verification flags
              </Typography>
            </Box>
            <FormControlLabel
              control={<Switch checked={isSocietyMember} onChange={(e) => setIsSocietyMember(e.target.checked)} />}
              label={isSocietyMember ? 'Member' : 'Non-Member'}
            />
          </Stack>
          {isSocietyMember && (
            <Alert severity="success" sx={{ mt: 2 }}>
              <Typography variant="body2">
                You are viewing as a society member. "Some History" flags will be visible for flagged properties.
              </Typography>
            </Alert>
          )}
        </Paper>

        {/* Stats Summary */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {[
            { label: 'Total Properties', value: stats.total, icon: BadgeIcon, color: '#89928E' },
            { label: 'Verified', value: stats.verified, icon: CheckCircleIcon, color: '#10b981' },
            { label: 'Pending', value: stats.pending, icon: PendingIcon, color: '#f59e0b' },
            { label: 'Tenants', value: stats.tenants, icon: BadgeIcon, color: '#3b82f6' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: 'rgba(37, 68, 57, 0.05)' }}>
                  <Icon sx={{ fontSize: 32, color: stat.color, mb: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A2D29' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Houses Grid */}
        {filteredHouses.length > 0 ? (
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {filteredHouses.map((house) => (
              <Grid item xs={12} md={6} lg={4} key={house.id}>
                <HouseCard house={house} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper sx={{ p: 6, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1A2D29', mb: 1 }}>
              No Properties Found
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              No registered properties in the selected location.
            </Typography>
          </Paper>
        )}

        {/* Info Box */}
        <Alert icon={<InfoIcon />} severity="info" sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Privacy & Verification Info
          </Typography>
          <List sx={{ m: 0 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText
                primary="Verified: Tenant has been verified by local police. Verification is valid for 24 months."
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText
                primary="Pending: Verification request has been submitted and is awaiting police inspection."
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText
                primary="Some History (Society Members Only): Verification flag detected. Exercise caution."
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          </List>
        </Alert>
      </Container>
    </Box>
  );
};

export default Dashboard;
