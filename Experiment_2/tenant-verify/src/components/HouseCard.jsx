import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import { useApp } from '../context/AppContext';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
  Alert,
  Stack,
  Divider,
} from '@mui/material';
import { Warning as WarningIcon } from '@mui/icons-material';

const HouseCard = ({ house }) => {
  const { isSocietyMember } = useApp();

  // Determine which status to show based on society membership
  const displayStatus = isSocietyMember ? house.statusSociety : house.statusCity;
  const showHistoryWarning = isSocietyMember && house.statusSociety === 'Some History';

  return (
    <Card
      sx={{
        backgroundColor: '#B6BDBB',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'box-shadow 0.3s ease',
        border: '1px solid #89928E',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ paddingBottom: '8px' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#1A2D29',
                marginBottom: '4px',
              }}
            >
              {house.id}
            </Typography>
            <Typography variant="body2" sx={{ color: '#4a5568' }}>
              {house.society}
            </Typography>
          </Box>
          <StatusBadge status={displayStatus} />
        </Box>

        {/* Occupant Info */}
        <Stack spacing={1} sx={{ marginBottom: '16px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#4a5568' }}>
              Occupant:
            </Typography>
            <Chip
              label={house.occupantType}
              size="small"
              sx={{
                backgroundColor: house.occupantType === 'Owner' ? '#2196F3' : '#9C27B0',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          </Box>

          {house.tenantName && (
            <Typography variant="body2" sx={{ color: '#4a5568' }}>
              <span style={{ fontWeight: 'bold' }}>Tenant:</span> {house.tenantName}
            </Typography>
          )}
        </Stack>

        {/* Police Info */}
        <Divider sx={{ margin: '16px 0', borderColor: '#708090' }} />
        <Stack spacing={1} sx={{ marginTop: '16px', marginBottom: '16px' }}>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#4a5568' }}>
              Police Station:
            </Typography>
            <Typography variant="body2" sx={{ color: '#2c3e50' }}>
              {house.policeStation}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#4a5568' }}>
              Inspector:
            </Typography>
            <Typography variant="body2" sx={{ color: '#2c3e50' }}>
              {house.inspectorName}
            </Typography>
          </Box>
        </Stack>

        {/* Verification Date */}
        {house.verificationDate && (
          <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', marginBottom: '16px' }}>
            Verified on: {new Date(house.verificationDate).toLocaleDateString()}
            <br />
            Valid until: {new Date(house.expiryDate).toLocaleDateString()}
          </Typography>
        )}

        {/* Society Member Warning */}
        {showHistoryWarning && (
          <Alert
            severity="warning"
            icon={<WarningIcon />}
            sx={{ marginBottom: '16px', backgroundColor: '#FFF3CD' }}
          >
            <Typography variant="caption" sx={{ color: '#664D03' }}>
              Society members are advised to exercise caution. Verification flag detected.
            </Typography>
          </Alert>
        )}
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ display: 'flex', gap: '12px', padding: '16px' }}>
        <Button
          component={Link}
          to={`/house/${house.id}`}
          variant="contained"
          fullWidth
          sx={{
            background: 'linear-gradient(135deg, #1A2D29 0%, #254439 100%)',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            },
          }}
        >
          View Details
        </Button>
        <Button
          component={Link}
          to={`/request-details/${house.id}`}
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: '#B6BDBB',
            color: '#1A2D29',
            fontWeight: 'bold',
            textTransform: 'none',
            borderColor: '#89928E',
            '&:hover': {
              backgroundColor: '#89928E',
              color: 'white',
            },
          }}
        >
          Request Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default HouseCard;
