import { useState } from 'react';
import HouseCard from '../components/HouseCard';
import { houses } from '../data/mockData';

const Neighborhood = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHouses = houses.filter((house) => {
    const matchesStatus =
      filterStatus === 'all' ||
      house.statusCity === filterStatus ||
      house.statusSociety === filterStatus;

    const matchesSearch =
      house.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      house.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (house.tenantName && house.tenantName.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: houses.length,
    verified: houses.filter((h) => h.statusCity === 'Verified').length,
    pending: houses.filter((h) => h.statusCity === 'Pending').length,
    someHistory: houses.filter((h) => h.statusSociety === 'Some History').length,
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Neighborhood / Houses</h1>
          <p className="text-lg text-gray-600">Browse all registered properties in your area</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-jet-black mb-1">{stats.total}</div>
            <p className="text-sm text-gray-600">Total Properties</p>
          </div>
          <div className="bg-green-100 rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-green-600 mb-1">{stats.verified}</div>
            <p className="text-sm text-green-700">Verified ✅</p>
          </div>
          <div className="bg-yellow-100 rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-1">{stats.pending}</div>
            <p className="text-sm text-yellow-700">Pending ⏳</p>
          </div>
          <div className="bg-blue-100 rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-600 mb-1">{stats.someHistory}</div>
            <p className="text-sm text-blue-700">Some History 📜</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by property ID, owner name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pine-teal"
              />
            </div>

            {/* Filter by Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pine-teal"
              >
                <option value="all">All Properties</option>
                <option value="Verified">Verified ✅</option>
                <option value="Pending">Pending ⏳</option>
                <option value="Some History">Some History 📜</option>
              </select>
            </div>
          </div>
        </div>

        {/* Houses Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Properties ({filteredHouses.length})
          </h2>

          {filteredHouses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHouses.map((house) => (
                <HouseCard key={house.id} house={house} />
              ))}
            </div>
          ) : (
            <div className="bg-ash-grey rounded-lg p-12 text-center">
              <p className="text-xl text-gray-600 mb-2">No properties found</p>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Info Card */}
        <div className="bg-pine-teal/20 border border-pine-teal/30 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span>💡</span>
            <span>How to Read the Status</span>
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>✅ Verified:</strong> Police verification completed and valid</li>
            <li><strong>⏳ Pending:</strong> Verification request submitted, awaiting police review</li>
            <li><strong>📜 Some History:</strong> Verification complete but shows historical records</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Neighborhood;
