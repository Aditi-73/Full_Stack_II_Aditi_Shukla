import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  Paper,
  Rating,
} from '@mui/material';

const Landing = () => {
  return (
    <Box >
      {/* Hero Section */}
      <Box
        sx={{
          py: 6,
          px: { xs: 2, sm: 3, lg: 4 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, pt: 4 }}>
            <img
              src="/logo/1.png"
              alt="TenantVerify Logo"
              style={{ width: '300px', height: '300px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
          </Box>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Welcome to <span style={{ color: '#1A2D29' }}>TenantVerify</span>
          </Typography>
          <Typography variant="h5" sx={{ color: '#1A2D29', mb: 2 }}>
            Enhancing neighborhood safety through blockchain-backed tenant verification
          </Typography>
          <Typography variant="body1" sx={{ color: '#1A2D29', mb: 3, maxWidth: '600px', mx: 'auto' }}>
            View verification status of tenants in your area while maintaining privacy.
            Only verification status is visible, not criminal details.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center', mb: 4 }}
          >
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #1A2D29 0%, #254439 100%)',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1.125rem',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                },
              }}
            >
              Get Started
            </Button>
            <Button
              component={Link}
              to="/dashboard"
              variant="outlined"
              sx={{
                backgroundColor: '#F7F7F2',
                color: '#254439',
                px: 4,
                py: 2,
                fontSize: '1.125rem',
                fontWeight: 'bold',
                textTransform: 'none',
                border: '2px solid #254439',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '&:hover': {
                  backgroundColor: '#E0E0E0',
                },
              }}
            >
              View Demo Dashboard
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: '#B6BDBB',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
                p: 3,
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  🔒
                </Typography>
                <Typography variant="h5" sx={{ color: '#1A2D29', fontWeight: 'bold', mb: 2 }}>
                  Privacy First
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a5568' }}>
                  Only verification status is visible. Criminal details remain confidential
                  and protected by blockchain technology.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: '#B6BDBB',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
                p: 3,
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  ✅
                </Typography>
                <Typography variant="h5" sx={{ color: '#1A2D29', fontWeight: 'bold', mb: 2 }}>
                  Police Verified
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a5568' }}>
                  All tenant verifications are conducted by local police inspectors
                  and recorded on blockchain for tamper-proof proof.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: '#B6BDBB',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
                p: 3,
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  🏘️
                </Typography>
                <Typography variant="h5" sx={{ color: '#1A2D29', fontWeight: 'bold', mb: 2 }}>
                  Community Safety
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a5568' }}>
                  Browse your locality and view verification status of all registered
                  properties. Request additional details when needed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ backgroundColor: '#F7F7F2', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
            How It Works
          </Typography>
          <Grid container spacing={2}>
            {[
              { num: 1, title: 'Select Location', desc: 'Choose your city, area, and society' },
              { num: 2, title: 'View Dashboard', desc: 'See all registered houses and their status' },
              { num: 3, title: 'Check Verification', desc: 'View police verification status' },
              { num: 4, title: 'Request Details', desc: 'Submit request if needed' },
            ].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.num}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      backgroundColor: '#2196F3',
                      borderRadius: '50%',
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.num}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4a5568' }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          Why Choose TenantVerify?
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: '⚡', title: 'Instant Verification', desc: 'Get instant access to tenant verification status backed by police authority' },
            { icon: '🔐', title: '100% Secure', desc: 'Blockchain technology ensures immutable and tamper-proof records' },
            { icon: '🌍', title: 'Community Driven', desc: 'Build safer neighborhoods through transparent verification' },
            { icon: '✓', title: 'Privacy First', desc: 'Only verification status is visible - criminal details remain private' },
          ].map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Stack direction="row" spacing={2}>
                <Typography variant="h2" sx={{ flexShrink: 0 }}>
                  {item.icon}
                </Typography>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4a5568' }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#B6BDBB', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
            What Users Say
          </Typography>
          <Grid container spacing={3}>
            {[
              { text: 'TenantVerify gave me peace of mind about my neighborhood. The transparency is amazing!', author: 'Resident, Mumbai' },
              { text: 'As a property owner, this platform helps me verify tenants quickly and safely.', author: 'Property Owner, Delhi' },
              { text: 'A game-changer for community safety. The blockchain verification is secure and reliable.', author: 'Police Officer, Bangalore' },
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{ backgroundColor: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Rating value={5} readOnly />
                    </Box>
                    <Typography variant="body2" sx={{ color: '#4a5568', mb: 2 }}>
                      "{item.text}"
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      - {item.author}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        <Stack spacing={2}>
          {[
            { q: 'Is my personal data safe on TenantVerify?', a: 'Yes, we use blockchain technology to ensure data is encrypted and immutable. Only verification status is visible, and all sensitive information is protected.' },
            { q: 'How long does tenant verification take?', a: 'Verification typically takes 24-48 hours from the time police department processes the request.' },
            { q: 'Can I request more details about a tenant?', a: 'Yes, you can submit a request for additional details, which will be reviewed by the police department.' },
            { q: 'What is the verification validity period?', a: 'Verification records are valid for 24 months from the date of issue.' },
          ].map((faq, idx) => (
            <Paper key={idx} sx={{ p: 2, backgroundColor: '#B6BDBB' }}>
              <details style={{ cursor: 'pointer' }}>
                <summary style={{ fontWeight: 'bold', color: '#1A2D29' }}>
                  {faq.q}
                </summary>
                <Typography variant="body2" sx={{ mt: 1, color: '#4a5568' }}>
                  {faq.a}
                </Typography>
              </details>
            </Paper>
          ))}
        </Stack>
      </Container>

      {/* CTA Section Before Footer */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1A2D29 0%, #254439 100%)',
          py: 4,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
          >
            Ready to Enhance Community Safety?
          </Typography>
          <Typography variant="body1" sx={{ color: '#F7F7F2', mb: 3 }}>
            Join thousands of residents, owners, and police officials on TenantVerify
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center' }}
          >
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              sx={{
                backgroundColor: '#F7F7F2',
                color: '#254439',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#E0E0E0',
                },
              }}
            >
              Get Started Now
            </Button>
            <Button
              component={Link}
              to="/dashboard"
              variant="outlined"
              sx={{
                borderColor: '#F7F7F2',
                color: '#F7F7F2',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              View Demo
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#1A2D29',
          color: 'white',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: '#B6BDBB' }}>
          © 2026 TenantVerify. Powered by Blockchain Technology.
        </Typography>
        <Typography variant="caption" sx={{ color: '#6b7280', mt: 1, display: 'block' }}>
          Verification valid for 24 months • Privacy Protected
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
