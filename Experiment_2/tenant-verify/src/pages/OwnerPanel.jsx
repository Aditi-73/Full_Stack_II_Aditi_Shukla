import { useState } from 'react';

const OwnerPanel = () => {
  const [propertyForm, setPropertyForm] = useState({
    houseId: '',
    society: '',
    area: '',
    city: '',
  });

  const [tenantForm, setTenantForm] = useState({
    propertyId: '',
    tenantName: '',
    tenantContact: '',
    documents: '',
  });

  const [submitted, setSubmitted] = useState(null);

  const handlePropertySubmit = (e) => {
    e.preventDefault();
    setSubmitted('property');
    setTimeout(() => setSubmitted(null), 3000);
  };

  const handleTenantSubmit = (e) => {
    e.preventDefault();
    setSubmitted('tenant');
    setTimeout(() => setSubmitted(null), 3000);
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Owner Panel
          </h1>
          <p className="text-lg text-gray-600">
            Manage your properties and tenant verification requests
          </p>
        </div>

        {/* Success Messages */}
        {submitted && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse">
            <p className="text-green-800 flex items-center gap-2">
              <span>✅</span>
              <span>
                {submitted === 'property'
                  ? 'Property registered successfully!'
                  : 'Tenant verification request submitted successfully!'}
              </span>
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Register Property Form */}
          <div className="bg-grey-olive rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📝</div>
              <h2 className="text-2xl font-bold text-porcelain">
                Register Property
              </h2>
            </div>

            <form onSubmit={handlePropertySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  House ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={propertyForm.houseId}
                  onChange={(e) =>
                    setPropertyForm({ ...propertyForm, houseId: e.target.value })
                  }
                  placeholder="e.g., A-101"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  Society Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={propertyForm.society}
                  onChange={(e) =>
                    setPropertyForm({ ...propertyForm, society: e.target.value })
                  }
                  placeholder="e.g., Green Valley Apartments"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  Area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={propertyForm.area}
                  onChange={(e) =>
                    setPropertyForm({ ...propertyForm, area: e.target.value })
                  }
                  placeholder="e.g., Andheri West"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={propertyForm.city}
                  onChange={(e) =>
                    setPropertyForm({ ...propertyForm, city: e.target.value })
                  }
                  placeholder="e.g., Mumbai"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-jet-black to-pine-teal text-white py-3 rounded-lg hover:shadow-lg transition font-semibold"
              >
                Register Property
              </button>
            </form>
          </div>

          {/* Tenant Verification Request Form */}
          <div className="bg-grey-olive rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">👤</div>
              <h2 className="text-2xl font-bold text-porcelain">
                Request Tenant Verification
              </h2>
            </div>

            <form onSubmit={handleTenantSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  Property ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={tenantForm.propertyId}
                  onChange={(e) =>
                    setTenantForm({ ...tenantForm, propertyId: e.target.value })
                  }
                  placeholder="e.g., A-101"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  Tenant Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={tenantForm.tenantName}
                  onChange={(e) =>
                    setTenantForm({ ...tenantForm, tenantName: e.target.value })
                  }
                  placeholder="Full name of tenant"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  Tenant Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={tenantForm.tenantContact}
                  onChange={(e) =>
                    setTenantForm({
                      ...tenantForm,
                      tenantContact: e.target.value,
                    })
                  }
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-porcelain mb-2">
                  Documents Submitted
                </label>
                <input
                  type="text"
                  value={tenantForm.documents}
                  onChange={(e) =>
                    setTenantForm({ ...tenantForm, documents: e.target.value })
                  }
                  placeholder="e.g., Aadhaar, PAN, Rental Agreement"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-jet-black to-pine-teal text-white py-3 rounded-lg hover:shadow-lg transition font-semibold"
              >
                Send Verification Request
              </button>
            </form>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <span>ℹ️</span>
              <span>Property Registration</span>
            </h4>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Register all properties you own for verification tracking</li>
              <li>
                • Registered properties will be visible in neighborhood dashboards
              </li>
              <li>• Keep property information updated and accurate</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
              <span>👮</span>
              <span>Tenant Verification Process</span>
            </h4>
            <ul className="text-sm text-purple-800 space-y-2">
              <li>
                • Submit verification request when new tenants move in
              </li>
              <li>
                • Police will conduct background checks and verify documents
              </li>
              <li>• Verification is valid for 24 months</li>
              <li>
                • Status will be updated on blockchain for transparency
              </li>
            </ul>
          </div>
        </div>

        {/* My Properties Section */}
        <div className="mt-8 bg-ash-grey rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-jet-black mb-6 flex items-center gap-3">
            <span>🏘️</span>
            <span>My Registered Properties</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    House ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Society
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Occupant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    A-101
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Green Valley Apartments
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Verified
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Owner</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-indigo-600 hover:text-indigo-800 font-semibold">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No additional properties registered
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerPanel;
