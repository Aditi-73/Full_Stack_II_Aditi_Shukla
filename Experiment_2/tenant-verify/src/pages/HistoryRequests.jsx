import { useState } from 'react';

const HistoryRequests = () => {
  const [requests] = useState([
    {
      id: 'HR-001',
      propertyId: 'A-101',
      address: 'Flat 101, Green Valley Apartments',
      occupantName: 'Amit Sharma',
      occupantType: 'Owner',
      requestDate: '2025-11-15',
      completionDate: '2025-11-18',
      status: 'Verified',
      verificationDetails: 'Owner verification completed',
      inspector: 'Inspector Rajesh Kumar',
    },
    {
      id: 'HR-002',
      propertyId: 'B-102',
      address: 'Flat 102, Green Valley Apartments',
      occupantName: 'Priya Mehta',
      occupantType: 'Tenant',
      requestDate: '2025-10-20',
      completionDate: '2025-10-25',
      status: 'Verified',
      verificationDetails: 'Tenant verification with background check',
      inspector: 'Inspector Rajesh Kumar',
    },
    {
      id: 'HR-003',
      propertyId: 'C-103',
      address: 'Flat 103, Green Valley Apartments',
      occupantName: 'Rahul Singh',
      occupantType: 'Tenant',
      requestDate: '2025-09-10',
      completionDate: '2025-09-15',
      status: 'Verified',
      verificationDetails: 'Standard tenant verification',
      inspector: 'Inspector Sharma',
    },
    {
      id: 'HR-004',
      propertyId: 'D-104',
      address: 'Flat 104, Green Valley Apartments',
      occupantName: 'Neha Patel',
      occupantType: 'Tenant',
      requestDate: '2025-08-05',
      completionDate: '2025-08-12',
      status: 'Rejected',
      verificationDetails: 'Verification failed - inconsistent documents',
      inspector: 'Inspector Kumar',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusEmoji = (status) => {
    switch (status) {
      case 'Verified':
        return '✅';
      case 'Rejected':
        return '❌';
      default:
        return '📋';
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">History Requests</h1>
          <p className="text-lg text-gray-600">All completed verification requests and historical records</p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-jet-black mb-1">4</div>
            <p className="text-sm text-gray-600">Total Completed</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-green-600 mb-1">3</div>
            <p className="text-sm text-green-700">Verified ✅</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-red-600 mb-1">1</div>
            <p className="text-sm text-red-700">Rejected ❌</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-600 mb-1">~5d</div>
            <p className="text-sm text-gray-600">Avg. Process Time</p>
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4 pb-4 border-b">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{request.occupantName}</h3>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{request.id}</span>
                  </div>
                  <p className="text-sm text-gray-600">{request.address}</p>
                </div>
                <span className={`${getStatusColor(request.status)} px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1 whitespace-nowrap`}>
                  {getStatusEmoji(request.status)} {request.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Occupant Type</h4>
                  <p className="text-gray-600">{request.occupantType}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Inspector</h4>
                  <p className="text-gray-600">{request.inspector}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Request Date</h4>
                  <p className="text-gray-600">{request.requestDate}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Completion Date</h4>
                  <p className="text-gray-600">{request.completionDate}</p>
                </div>
              </div>

              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Verification Details</h4>
                <p className="text-gray-600">{request.verificationDetails}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-jet-black text-white rounded-lg hover:bg-pine-teal transition font-semibold text-sm">
                  📋 View Report
                </button>
                <button className="px-4 py-2 border border-jet-black text-jet-black rounded-lg hover:bg-gray-100 transition font-semibold text-sm">
                  ⛓️ View Blockchain Record
                </button>
                <button className="px-4 py-2 border border-jet-black text-jet-black rounded-lg hover:bg-gray-100 transition font-semibold text-sm">
                  📤 Export Report
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 bg-pine-teal/20 border border-pine-teal/30 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span>📊</span>
            <span>Historical Records</span>
          </h3>
          <p className="text-sm text-gray-700">
            All completed verifications are permanently recorded on the blockchain. These records are immutable and serve as official verification history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryRequests;
