import { useState } from 'react';

const OwnerProperties = () => {
  const [properties] = useState([
    {
      id: 'PROP-001',
      address: 'Flat 201, Green Valley Apartments, Andheri West',
      type: 'Residential Apartment',
      occupancy: 'Owner Occupied',
      registrationDate: '2025-09-15',
      verificationStatus: 'Verified',
      tenants: [
        { id: 'T-001', name: 'Self (Owner)', type: 'Owner', verificationDate: '2025-09-15' },
      ],
      documents: 'Property Deed, NOC, Tax Receipt'
    },
    {
      id: 'PROP-002',
      address: 'Flat 302, Green Valley Apartments, Andheri West',
      type: 'Residential Apartment',
      occupancy: 'Rented',
      registrationDate: '2025-08-10',
      verificationStatus: 'Pending',
      tenants: [
        { id: 'T-002', name: 'Rahul Mehta', type: 'Tenant', verificationDate: null },
      ],
      documents: 'Property Deed, Lease Agreement, NOC'
    },
    {
      id: 'PROP-003',
      address: 'Flat 401, Green Valley Apartments, Andheri West',
      type: 'Residential Apartment',
      occupancy: 'Rented',
      registrationDate: '2025-07-22',
      verificationStatus: 'Verified',
      tenants: [
        { id: 'T-003', name: 'Priya Singh', type: 'Tenant', verificationDate: '2025-11-20' },
      ],
      documents: 'Property Deed, Lease Agreement, NOC'
    },
  ]);

  const getStatusColor = (status) => {
    return status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getStatusEmoji = (status) => {
    return status === 'Verified' ? '✅' : '⏳';
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Properties</h1>
          <p className="text-lg text-gray-600">Manage all your registered properties and tenants</p>
        </div>

        {/* Add Property Button */}
        <div className="mb-8">
          <button className="px-6 py-3 bg-gradient-to-r from-jet-black to-pine-teal text-white rounded-lg font-semibold hover:shadow-lg transition">
            ➕ Add New Property
          </button>
        </div>

        {/* Properties List */}
        <div className="space-y-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              {/* Property Header */}
              <div className="flex justify-between items-start mb-4 pb-4 border-b">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{property.address}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{property.type}</span>
                    <span>•</span>
                    <span className="font-semibold">{property.occupancy}</span>
                  </div>
                </div>
                <span className={`${getStatusColor(property.verificationStatus)} px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1`}>
                  {getStatusEmoji(property.verificationStatus)} {property.verificationStatus}
                </span>
              </div>

              {/* Property Info */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Property ID</h4>
                  <p className="text-gray-600">{property.id}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Registration Date</h4>
                  <p className="text-gray-600">{property.registrationDate}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Documents</h4>
                  <p className="text-gray-600 text-sm">{property.documents}</p>
                </div>
              </div>

              {/* Tenants Section */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>👥</span>
                  <span>Tenants & Occupants</span>
                </h4>
                <div className="space-y-2">
                  {property.tenants.map((tenant) => (
                    <div key={tenant.id} className="flex items-center justify-between bg-white p-3 rounded border">
                      <div>
                        <p className="font-semibold text-gray-900">{tenant.name}</p>
                        <p className="text-xs text-gray-600">{tenant.type}</p>
                      </div>
                      <div className="text-right">
                        {tenant.verificationDate ? (
                          <p className="text-sm text-green-600 font-semibold">✅ Verified {tenant.verificationDate}</p>
                        ) : (
                          <p className="text-sm text-yellow-600 font-semibold">⏳ Pending</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-jet-black text-white rounded-lg hover:bg-pine-teal transition font-semibold text-sm">
                  Edit Property
                </button>
                <button className="px-4 py-2 border border-jet-black text-jet-black rounded-lg hover:bg-gray-100 transition font-semibold text-sm">
                  View Requests
                </button>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition font-semibold text-sm">
                  Delete Property
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerProperties;
