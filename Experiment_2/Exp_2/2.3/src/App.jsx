import { useState } from 'react';
import { Button, TextField, Card, CardContent, Container, Box, Typography } from '@mui/material';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
      console.log('Material UI Form Submitted:', { name });
      setTimeout(() => {
        setName('');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 3, color: '#1976d2' }}>
            Material UI Form
          </Typography>

          {submitted ? (
            <Box sx={{ p: 2, bgcolor: '#e8f5e9', borderRadius: 1, textAlign: 'center' }}>
              <Typography color="success.main" variant="body1">
                Form submitted successfully! Name: {name}
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Name"
                placeholder="Enter your name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="medium"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1.5, fontSize: '1rem' }}
              >
                SUBMIT
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
