import { useState } from 'react';

const TenantRequests = () => {
  const [requests] = useState([
    {
      id: 'TR-001',
      propertyId: 'PROP-001',
      tenantName: 'Rahul Mehta',
      requestType: 'Tenant Registration',
      status: 'Pending',
      submittedDate: '2025-12-20',
      details: 'New tenant registration request',
      documents: ['Aadhar', 'PAN', 'Employment Letter'],
    },
    {
      id: 'TR-002',
      propertyId: 'PROP-002',
      tenantName: 'Priya Singh',
      requestType: 'Verification Renewal',
      status: 'Approved',
      submittedDate: '2025-12-15',
      approvedDate: '2025-12-18',
      details: 'Annual tenant verification renewal',
      documents: ['Previous Verification', 'Employment Proof'],
    },
    {
      id: 'TR-003',
      propertyId: 'PROP-003',
      tenantName: 'Vikram Kumar',
      requestType: 'Tenant Replacement',
      status: 'In Progress',
      submittedDate: '2025-12-22',
      details: 'Previous tenant checkout, new tenant setup',
      documents: ['Exit Document', 'New Aadhar', 'References'],
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

  const getStatusEmoji = (status) => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tenant Requests</h1>
          <p className="text-lg text-gray-600">Manage tenant verification and registration requests from police</p>
        </div>

        {/* Submit New Request Button */}
        <div className="mb-8">
          <button className="px-6 py-3 bg-gradient-to-r from-jet-black to-pine-teal text-white rounded-lg font-semibold hover:shadow-lg transition">
            ➕ Submit New Tenant Request
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{request.tenantName}</h3>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{request.id}</span>
                    </div>
                    <p className="text-sm text-gray-600">Property: {request.propertyId} | Request: {request.requestType}</p>
                  </div>
                  <span className={`${getStatusColor(request.status)} px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1 whitespace-nowrap`}>
                    {getStatusEmoji(request.status)} {request.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4 pb-4 border-b">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Request Type</h4>
                    <p className="text-gray-600">{request.requestType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Submitted Date</h4>
                    <p className="text-gray-600">{request.submittedDate}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Request Details</h4>
                  <p className="text-gray-600 mb-3">{request.details}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Documents</h4>
                  <div className="flex flex-wrap gap-2">
                    {request.documents.map((doc, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        📄 {doc}
                      </span>
                    ))}
                  </div>
                </div>

                {request.approvedDate && (
                  <div className="bg-green-50 p-3 rounded mb-4 border border-green-200">
                    <p className="text-sm text-green-700"><strong>Approved on:</strong> {request.approvedDate}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t">
                  <button className="px-4 py-2 bg-jet-black text-white rounded-lg hover:bg-pine-teal transition font-semibold text-sm">
                    View Details
                  </button>
                  {request.status === 'Pending' && (
                    <>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-sm">
                        ✓ Approve
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-sm">
                        ✕ Reject
                      </button>
                    </>
                  )}
                  {request.status === 'In Progress' && (
                    <button className="px-4 py-2 border border-jet-black text-jet-black rounded-lg hover:bg-gray-100 transition font-semibold text-sm">
                      Track Progress
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-ash-grey rounded-lg p-12 text-center">
              <p className="text-xl text-gray-600 mb-2">No tenant requests yet</p>
              <p className="text-gray-500">Submit a new tenant request to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenantRequests;
