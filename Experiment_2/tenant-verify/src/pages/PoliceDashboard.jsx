import { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Card, CardContent, Button, Chip, Grid } from '@mui/material';
import { verificationRequests, demandHistoryRequests } from '../data/mockData';

const PoliceDashboard = () => {
  const [activeTab, setActiveTab] = useState('verification');
  const [verifications, setVerifications] = useState(verificationRequests);
  const [demands, setDemands] = useState(demandHistoryRequests);

  const handleVerificationAction = (id, action) => {
    setVerifications((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: action === 'approve' ? 'Verified' : 'Rejected' } : req
      )
    );
  };

  const handleDemandAction = (id, action) => {
    setDemands((prev) =>
      prev.map((req) =>
        req.id === id
          ? {
              ...req,
              status: action === 'approve' ? 'Approved' : 'Rejected',
              reviewedBy: 'Inspector Sharma',
              reviewDate: new Date().toISOString().split('T')[0],
            }
          : req
      )
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" sx={{ fontSize: '3.5rem', mb: 2 }}>👮</Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: '#1A2D29' }}>Police Admin Dashboard</Typography>
          <Typography variant="body1" sx={{ color: '#1A2D29', opacity: 0.8 }}>Manage tenant verification and detail requests</Typography>
        </Box>

        <Card sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent sx={{ p: 0 }}>
            <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <Tab value="verification" label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span>✓ Tenant Verification</span>
                  <Chip label={verifications.filter((v) => v.status === 'Pending').length} size="small" sx={{ backgroundColor: 'rgba(45, 95, 111, 0.2)', color: '#2d5f6f' }} />
                </Box>
              } />
              <Tab value="demands" label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span>📝 Demand History</span>
                  <Chip label={demands.filter((d) => d.status === 'Pending').length} size="small" sx={{ backgroundColor: '#ffe0b2', color: '#e65100' }} />
                </Box>
              } />
            </Tabs>
          </CardContent>
        </Card>

        {activeTab === 'verification' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {verifications.map((request) => (
              <Card key={request.id} sx={{ boxShadow: 6, backgroundColor: '#5a6b5b', color: '#fff', minHeight: '200px', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>{request.houseId} - {request.society}</Typography>
                      <Typography variant="body2">{request.tenantName}</Typography>
                    </Box>
                    <Chip label={request.status} color={request.status === 'Pending' ? 'warning' : request.status === 'Verified' ? 'success' : 'error'} variant="outlined" />
                  </Box>
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Submission Date</Typography>
                      <Typography variant="body2">{request.submissionDate}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Contact</Typography>
                      <Typography variant="body2">{request.tenantContact}</Typography>
                    </Grid>
                  </Grid>
                  {request.status === 'Pending' && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="contained" size="small" onClick={() => handleVerificationAction(request.id, 'approve')} sx={{ backgroundColor: '#2e7d32' }}>Approve</Button>
                      <Button variant="outlined" size="small" onClick={() => handleVerificationAction(request.id, 'reject')} sx={{ borderColor: '#fff', color: '#fff' }}>Reject</Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {activeTab === 'demands' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {demands.map((request) => (
              <Card key={request.id} sx={{ boxShadow: 6, backgroundColor: '#5a6b5b', color: '#fff', minHeight: '200px', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>{request.houseId} - {request.society}</Typography>
                      <Typography variant="body2">{request.tenantName}</Typography>
                    </Box>
                    <Chip label={request.status} color={request.status === 'Pending' ? 'warning' : request.status === 'Approved' ? 'success' : 'error'} variant="outlined" />
                  </Box>
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Demand Details</Typography>
                      <Typography variant="body2">{request.demandDetails}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Date Requested</Typography>
                      <Typography variant="body2">{request.dateRequested}</Typography>
                    </Grid>
                  </Grid>
                  {request.status === 'Pending' && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="contained" size="small" onClick={() => handleDemandAction(request.id, 'approve')} sx={{ backgroundColor: '#2e7d32' }}>Approve</Button>
                      <Button variant="outlined" size="small" onClick={() => handleDemandAction(request.id, 'reject')} sx={{ borderColor: '#fff', color: '#fff' }}>Reject</Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PoliceDashboard;
