import { useState } from 'react';
import { useApp } from '../context/AppContext';

const MyRequests = () => {
  const { userRole } = useApp();

  const [requests] = useState([
    {
      id: 'REQ-001',
      propertyId: 'A-101',
      propertyAddress: 'Flat 101, Green Valley Apartments',
      requestType: 'Additional Verification',
      status: 'Approved',
      submittedDate: '2025-12-15',
      resolvedDate: '2025-12-20',
      reason: 'Wanted detailed verification history',
      notes: 'Verified by Inspector Rajesh Kumar'
    },
    {
      id: 'REQ-002',
      propertyId: 'B-102',
      propertyAddress: 'Flat 102, Green Valley Apartments',
      requestType: 'Detail Request',
      status: 'Pending',
      submittedDate: '2025-12-22',
      resolvedDate: null,
      reason: 'Request for tenant background check',
      notes: 'Awaiting police station response'
    },
    {
      id: 'REQ-003',
      propertyId: 'C-103',
      propertyAddress: 'Flat 103, Green Valley Apartments',
      requestType: 'Verification Update',
      status: 'In Progress',
      submittedDate: '2025-12-18',
      resolvedDate: null,
      reason: 'Update verification after 6 months',
      notes: 'Scheduled for inspection'
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeEmoji = (status) => {
    switch (status) {
      case 'Approved':
        return '✅';
      case 'Pending':
        return '⏳';
      case 'In Progress':
        return '🔄';
      case 'Rejected':
        return '❌';
      default:
        return '📋';
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Requests</h1>
          <p className="text-lg text-gray-600">
            {userRole === 'resident' && 'Track your verification and detail requests'}
            {userRole === 'owner' && 'Manage tenant verification requests'}
            {userRole === 'police' && 'View verification requests'}
          </p>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{request.propertyAddress}</h3>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{request.propertyId}</span>
                    </div>
                    <p className="text-sm text-gray-600">Request ID: {request.id}</p>
                  </div>
                  <span className={`${getStatusColor(request.status)} px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1`}>
                    {getStatusBadgeEmoji(request.status)} {request.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Request Type</h4>
                    <p className="text-gray-600">{request.requestType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Reason</h4>
                    <p className="text-gray-600">{request.reason}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Submitted Date</h4>
                    <p className="text-gray-600">{request.submittedDate}</p>
                  </div>
                  {request.resolvedDate && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">Resolved Date</h4>
                      <p className="text-gray-600">{request.resolvedDate}</p>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Notes</h4>
                  <p className="text-gray-600">{request.notes}</p>
                </div>

                {request.status !== 'Approved' && (
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-jet-black text-white rounded-lg hover:bg-pine-teal transition font-semibold text-sm">
                      View Details
                    </button>
                    {request.status === 'Pending' && (
                      <button className="px-4 py-2 border border-jet-black text-jet-black rounded-lg hover:bg-gray-100 transition font-semibold text-sm">
                        Cancel Request
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-ash-grey rounded-lg p-12 text-center">
              <p className="text-xl text-gray-600 mb-2">No requests yet</p>
              <p className="text-gray-500">When you submit verification requests, they will appear here</p>
            </div>
          )}
        </div>

        {/* Submit New Request Button */}
        {userRole === 'resident' && (
          <div className="mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-jet-black to-pine-teal text-white rounded-lg font-semibold hover:shadow-lg transition">
              ➕ Submit New Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequests;
