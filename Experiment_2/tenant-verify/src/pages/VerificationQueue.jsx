import { useState } from 'react';

const VerificationQueue = () => {
  const [verifications] = useState([
    {
      id: 'VQ-001',
      propertyId: 'A-101',
      address: 'Flat 101, Green Valley Apartments',
      occupantName: 'Rahul Mehta',
      occupantType: 'Tenant',
      requestDate: '2025-12-20',
      priority: 'High',
      status: 'Pending Inspection',
      details: 'First-time tenant verification',
    },
    {
      id: 'VQ-002',
      propertyId: 'B-102',
      address: 'Flat 102, Green Valley Apartments',
      occupantName: 'Priya Singh',
      occupantType: 'Tenant',
      requestDate: '2025-12-18',
      priority: 'Medium',
      status: 'Documents Reviewed',
      details: 'Renewal of previous verification',
    },
    {
      id: 'VQ-003',
      propertyId: 'C-103',
      address: 'Flat 103, Green Valley Apartments',
      occupantName: 'Vikram Kumar',
      occupantType: 'Owner',
      requestDate: '2025-12-15',
      priority: 'Low',
      status: 'Awaiting Submission',
      details: 'Owner verification for property registration',
    },
  ]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending Inspection':
        return 'bg-red-100 text-red-800';
      case 'Documents Reviewed':
        return 'bg-blue-100 text-blue-800';
      case 'Awaiting Submission':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Verification Queue</h1>
          <p className="text-lg text-gray-600">Pending tenant and owner verifications requiring police inspection</p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-red-600 mb-1">3</div>
            <p className="text-sm text-gray-600">Total Pending</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-red-600 mb-1">1</div>
            <p className="text-sm text-red-700">High Priority</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-1">1</div>
            <p className="text-sm text-yellow-700">Medium Priority</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-600 mb-1">👮</div>
            <p className="text-sm text-gray-600">Inspector: You</p>
          </div>
        </div>

        {/* Verifications List */}
        <div className="space-y-4">
          {verifications.map((verification) => (
            <div key={verification.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-pine-teal">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{verification.occupantName}</h3>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{verification.id}</span>
                  </div>
                  <p className="text-sm text-gray-600">{verification.address}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className={`${getPriorityColor(verification.priority)} px-3 py-1 rounded-full font-semibold text-xs text-center`}>
                    {verification.priority}
                  </span>
                  <span className={`${getStatusColor(verification.status)} px-3 py-1 rounded-full font-semibold text-xs text-center`}>
                    {verification.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 pb-4 border-b">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Occupant Type</h4>
                  <p className="text-gray-600">{verification.occupantType}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Request Date</h4>
                  <p className="text-gray-600">{verification.requestDate}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Property ID</h4>
                  <p className="text-gray-600">{verification.propertyId}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Details</h4>
                <p className="text-gray-600">{verification.details}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 bg-jet-black text-white rounded-lg hover:bg-pine-teal transition font-semibold text-sm">
                  📋 Review Documents
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
                  📍 Schedule Inspection
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-sm">
                  ✅ Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-sm">
                  ❌ Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 bg-pine-teal/20 border border-pine-teal/30 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span>💡</span>
            <span>Verification Process</span>
          </h3>
          <ol className="text-sm text-gray-700 space-y-1 ml-6 list-decimal">
            <li>Review submitted documents</li>
            <li>Schedule inspection with occupant</li>
            <li>Conduct field inspection</li>
            <li>Submit verification report</li>
            <li>System records on blockchain</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VerificationQueue;
