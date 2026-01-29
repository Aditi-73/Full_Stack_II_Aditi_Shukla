import { useState } from 'react';

const BlockchainLogs = () => {
  const [auditLogs] = useState([
    {
      id: 'TXN-001',
      timestamp: '2025-12-23 14:30:00',
      action: 'Verification Created',
      propertyId: 'A-101',
      details: 'Police verification created for Flat 101',
      blockHash: '0x8f4e2c8a5b9d3e1f2a4c6e8g0h2i4j',
      status: 'Confirmed',
    },
    {
      id: 'TXN-002',
      timestamp: '2025-12-22 10:15:00',
      action: 'Verification Updated',
      propertyId: 'B-102',
      details: 'Status changed to Verified',
      blockHash: '0x3a7d9e2f5c1b8a4g6h9i2j4k7m5n8o',
      status: 'Confirmed',
    },
    {
      id: 'TXN-003',
      timestamp: '2025-12-21 16:45:00',
      action: 'Request Submitted',
      propertyId: 'C-103',
      details: 'Detail request submitted for additional verification',
      blockHash: '0x1f4a8b5c2e9d3g6h1i8j2k5l7m9n2o',
      status: 'Confirmed',
    },
    {
      id: 'TXN-004',
      timestamp: '2025-12-20 09:22:00',
      action: 'Access Log',
      propertyId: 'A-101',
      details: 'Property details accessed by Resident User',
      blockHash: '0x4k9m3n1o7p2q5r8s1t4u7v2w5x8y1z',
      status: 'Confirmed',
    },
  ]);

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blockchain / Audit Logs</h1>
          <p className="text-lg text-gray-600">Complete immutable record of all transactions on TenantVerify</p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-jet-black mb-1">⛓️</div>
            <h3 className="font-semibold text-gray-900 mb-1">Blockchain Secured</h3>
            <p className="text-sm text-gray-600">All transactions stored immutably on blockchain</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-jet-black mb-1">🔐</div>
            <h3 className="font-semibold text-gray-900 mb-1">Tamper Proof</h3>
            <p className="text-sm text-gray-600">Cannot be modified or deleted once recorded</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-jet-black mb-1">✅</div>
            <h3 className="font-semibold text-gray-900 mb-1">Fully Transparent</h3>
            <p className="text-sm text-gray-600">Every action is recorded and traceable</p>
          </div>
        </div>

        {/* Audit Logs Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Transaction History</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Timestamp</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Property</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Details</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Block Hash</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-mono text-jet-black">{log.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{log.timestamp}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{log.action}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{log.propertyId}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{log.details}</td>
                    <td className="px-6 py-4 text-sm font-mono text-blue-600 cursor-pointer hover:underline" title="Click to view full hash">
                      {log.blockHash.substring(0, 15)}...
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        ✅ {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination or Load More */}
          <div className="p-6 border-t border-gray-200 text-center">
            <button className="px-6 py-2 text-jet-black border border-jet-black rounded-lg hover:bg-gray-100 transition font-semibold">
              Load More Transactions
            </button>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-8 bg-pine-teal/20 border border-pine-teal/30 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span>📋</span>
            <span>Understanding the Logs</span>
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><strong>Transaction ID:</strong> Unique identifier for each blockchain transaction</li>
            <li><strong>Block Hash:</strong> Cryptographic hash linking to blockchain block</li>
            <li><strong>Status:</strong> Confirmed = Permanently recorded on blockchain</li>
            <li><strong>All records are immutable:</strong> Once recorded, they cannot be changed or deleted</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockchainLogs;
