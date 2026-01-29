// Mock data for houses in different societies
export const houses = [
  {
    id: 'A-101',
    society: 'Green Valley Apartments',
    city: 'Mumbai',
    area: 'Andheri West',
    statusCity: 'Verified',
    statusSociety: 'Verified',
    policeStation: 'Andheri Police Station',
    inspectorName: 'Inspector Rajesh Kumar',
    occupantType: 'Owner',
    verificationDate: '2025-11-15',
    expiryDate: '2027-11-15',
    ownerName: 'Amit Sharma'
  },
  {
    id: 'B-102',
    society: 'Green Valley Apartments',
    city: 'Mumbai',
    area: 'Andheri West',
    statusCity: 'Pending',
    statusSociety: 'Pending',
    policeStation: 'Andheri Police Station',
    inspectorName: '-',
    occupantType: 'Tenant',
    verificationDate: null,
    expiryDate: null,
    ownerName: 'Priya Mehta',
    tenantName: 'Rahul Verma'
  },
  {
    id: 'C-103',
    society: 'Green Valley Apartments',
    city: 'Mumbai',
    area: 'Andheri West',
    statusCity: 'Verified',
    statusSociety: 'Some History',
    policeStation: 'Andheri Police Station',
    inspectorName: 'Inspector Rajesh Kumar',
    occupantType: 'Tenant',
    verificationDate: '2025-10-20',
    expiryDate: '2027-10-20',
    ownerName: 'Suresh Patel',
    tenantName: 'Vikram Singh'
  },
  {
    id: 'D-104',
    society: 'Green Valley Apartments',
    city: 'Mumbai',
    area: 'Andheri West',
    statusCity: 'Verified',
    statusSociety: 'Verified',
    policeStation: 'Andheri Police Station',
    inspectorName: 'Inspector Meera Desai',
    occupantType: 'Tenant',
    verificationDate: '2025-09-10',
    expiryDate: '2027-09-10',
    ownerName: 'Kavita Joshi',
    tenantName: 'Neha Kapoor'
  },
  {
    id: 'E-201',
    society: 'Sunrise Heights',
    city: 'Mumbai',
    area: 'Bandra East',
    statusCity: 'Pending',
    statusSociety: 'Pending',
    policeStation: 'Bandra Police Station',
    inspectorName: '-',
    occupantType: 'Tenant',
    verificationDate: null,
    expiryDate: null,
    ownerName: 'Ravi Gupta',
    tenantName: 'Anjali Reddy'
  },
  {
    id: 'F-202',
    society: 'Sunrise Heights',
    city: 'Mumbai',
    area: 'Bandra East',
    statusCity: 'Verified',
    statusSociety: 'Verified',
    policeStation: 'Bandra Police Station',
    inspectorName: 'Inspector Anil Rao',
    occupantType: 'Owner',
    verificationDate: '2025-12-01',
    expiryDate: '2027-12-01',
    ownerName: 'Deepak Malhotra'
  },
  {
    id: 'G-301',
    society: 'Royal Residency',
    city: 'Delhi',
    area: 'South Extension',
    statusCity: 'Verified',
    statusSociety: 'Some History',
    policeStation: 'South Extension Police Station',
    inspectorName: 'Inspector Sunil Sharma',
    occupantType: 'Tenant',
    verificationDate: '2025-08-15',
    expiryDate: '2027-08-15',
    ownerName: 'Manish Agarwal',
    tenantName: 'Karan Arora'
  },
  {
    id: 'H-302',
    society: 'Royal Residency',
    city: 'Delhi',
    area: 'South Extension',
    statusCity: 'Verified',
    statusSociety: 'Verified',
    policeStation: 'South Extension Police Station',
    inspectorName: 'Inspector Pooja Nair',
    occupantType: 'Owner',
    verificationDate: '2025-07-20',
    expiryDate: '2027-07-20',
    ownerName: 'Sangeeta Chopra'
  }
];

// Mock verification requests for police dashboard
export const verificationRequests = [
  {
    id: 'VR-001',
    houseId: 'B-102',
    society: 'Green Valley Apartments',
    city: 'Mumbai',
    area: 'Andheri West',
    tenantName: 'Rahul Verma',
    ownerName: 'Priya Mehta',
    requestDate: '2026-01-20',
    status: 'Pending',
    documents: ['Aadhaar', 'Rental Agreement']
  },
  {
    id: 'VR-002',
    houseId: 'E-201',
    society: 'Sunrise Heights',
    city: 'Mumbai',
    area: 'Bandra East',
    tenantName: 'Anjali Reddy',
    ownerName: 'Ravi Gupta',
    requestDate: '2026-01-22',
    status: 'Pending',
    documents: ['Aadhaar', 'PAN Card', 'Rental Agreement']
  }
];

// Mock demand history requests
export const demandHistoryRequests = [
  {
    id: 'DHR-001',
    houseId: 'C-103',
    society: 'Green Valley Apartments',
    requestedBy: 'Neighbor - A-101',
    reason: 'Suspicious activities observed late at night. Multiple unknown visitors.',
    requestDate: '2026-01-24',
    status: 'Pending',
    reviewedBy: null,
    reviewDate: null
  },
  {
    id: 'DHR-002',
    houseId: 'G-301',
    society: 'Royal Residency',
    requestedBy: 'Neighbor - H-302',
    reason: 'Loud noises and disturbances during odd hours.',
    requestDate: '2026-01-23',
    status: 'Approved',
    reviewedBy: 'Inspector Sunil Sharma',
    reviewDate: '2026-01-25'
  }
];

// Cities and their areas
export const locations = {
  Mumbai: {
    'Andheri West': ['Green Valley Apartments', 'Shanti Nagar', 'Palm Grove'],
    'Bandra East': ['Sunrise Heights', 'Sea View Complex'],
    'Powai': ['Lake View Apartments', 'Tech Park Residency']
  },
  Delhi: {
    'South Extension': ['Royal Residency', 'Grand Plaza'],
    'Dwarka': ['Sector 10 Apartments', 'Metro View'],
    'Vasant Kunj': ['Green Woods', 'Urban Heights']
  },
  Bangalore: {
    'Whitefield': ['Tech Valley', 'Brigade Panorama'],
    'Koramangala': ['Skyline Apartments', 'Park Avenue']
  }
};
