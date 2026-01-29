import { Routes, Route, useLocation } from 'react-router-dom';
import { useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import AreaSelection from './pages/AreaSelection';
import Dashboard from './pages/Dashboard';
import HouseDetails from './pages/HouseDetails';
import RequestDetails from './pages/RequestDetails';
import OwnerPanel from './pages/OwnerPanel';
import PoliceDashboard from './pages/PoliceDashboard';
import MyRequests from './pages/MyRequests';
import Neighborhood from './pages/Neighborhood';
import BlockchainLogs from './pages/BlockchainLogs';
import OwnerProperties from './pages/OwnerProperties';
import TenantRequests from './pages/TenantRequests';
import VerificationQueue from './pages/VerificationQueue';
import HistoryRequests from './pages/HistoryRequests';
import { Box, Container } from '@mui/material';
import './App.css';

const App = () => {
  const { sidebarWidth } = useApp();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #254439 0%, #B6BDB9 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <Box sx={{ display: 'flex', paddingTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            marginLeft: `${sidebarWidth}px`,
            flexGrow: 1,
            transition: 'margin-left 0.3s ease',
            overflow: 'auto',
            width: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/area" element={<AreaSelection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/neighborhood" element={<Neighborhood />} />
            <Route path="/my-requests" element={<MyRequests />} />
            <Route path="/blockchain" element={<BlockchainLogs />} />
            <Route path="/house/:id" element={<HouseDetails />} />
            <Route path="/request-details/:id" element={<RequestDetails />} />
            <Route path="/owner" element={<OwnerPanel />} />
            <Route path="/owner/properties" element={<OwnerProperties />} />
            <Route path="/owner/tenant-requests" element={<TenantRequests />} />
            <Route path="/police" element={<PoliceDashboard />} />
            <Route path="/police/queue" element={<VerificationQueue />} />
            <Route path="/police/history" element={<HistoryRequests />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
