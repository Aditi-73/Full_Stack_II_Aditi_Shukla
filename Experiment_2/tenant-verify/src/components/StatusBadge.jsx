import { Chip } from '@mui/material';
import { Check as CheckIcon, Schedule as ScheduleIcon, Warning as WarningIcon } from '@mui/icons-material';

const StatusBadge = ({ status, type = 'city', className = '' }) => {
  const getStatusStyles = () => {
    if (status === 'Verified') {
      return {
        backgroundColor: '#C8E6C9',
        color: '#1B5E20',
        borderColor: '#81C784',
      };
    } else if (status === 'Pending') {
      return {
        backgroundColor: '#FFF9C4',
        color: '#F57F17',
        borderColor: '#FDD835',
      };
    } else if (status === 'Some History') {
      return {
        backgroundColor: '#FFE0B2',
        color: '#E65100',
        borderColor: '#FFB74D',
      };
    }
    return {
      backgroundColor: '#EEEEEE',
      color: '#424242',
      borderColor: '#BDBDBD',
    };
  };

  const getIcon = () => {
    if (status === 'Verified') {
      return <CheckIcon fontSize="small" />;
    } else if (status === 'Pending') {
      return <ScheduleIcon fontSize="small" />;
    } else if (status === 'Some History') {
      return <WarningIcon fontSize="small" />;
    }
    return null;
  };

  const styles = getStatusStyles();

  return (
    <Chip
      icon={getIcon()}
      label={status}
      variant="outlined"
      sx={{
        ...styles,
        fontWeight: 'bold',
        fontSize: '0.75rem',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
    />
  );
};

export default StatusBadge;
