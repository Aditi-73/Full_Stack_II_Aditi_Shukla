import { useParams, Link } from 'react-router-dom';
import { houses } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import { useApp } from '../context/AppContext';

const HouseDetails = () => {
  const { id } = useParams();
  const { isSocietyMember } = useApp();
  const house = houses.find((h) => h.id === id);

  if (!house) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            House Not Found
          </h1>
          <Link
            to="/dashboard"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/dashboard"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 font-semibold"
        >
          ← Back to Dashboard
        </Link>

        {/* House Details Card */}
        <div className="bg-ash-grey rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="border-b border-grey-olive pb-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold text-jet-black mb-2">
                  {house.id}
                </h1>
                <p className="text-lg text-gray-600">{house.society}</p>
                <p className="text-sm text-gray-500">
                  {house.area}, {house.city}
                </p>
              </div>
              <div
                className={`text-5xl ${
                  house.occupantType === 'Owner' ? '🏠' : '🏘️'
                }`}
              >
                {house.occupantType === 'Owner' ? '🏠' : '🏘️'}
              </div>
            </div>
          </div>

          {/* Status Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Verification Status
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">City Status</div>
                <StatusBadge status={house.statusCity} />
                <p className="text-xs text-gray-500 mt-2">
                  Visible to all city residents
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Society Status</div>
                {isSocietyMember ? (
                  <>
                    <StatusBadge status={house.statusSociety} />
                    <p className="text-xs text-gray-500 mt-2">
                      Visible to society members only
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-gray-500">
                    Society member access required
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Occupant Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Occupant Information
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Occupant Type:</span>
                <span
                  className={`font-semibold px-3 py-1 rounded ${
                    house.occupantType === 'Owner'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {house.occupantType}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Owner Name:</span>
                <span className="font-semibold">{house.ownerName}</span>
              </div>
              {house.tenantName && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenant Name:</span>
                  <span className="font-semibold">{house.tenantName}</span>
                </div>
              )}
            </div>
          </div>

          {/* Police Verification Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Police Verification Details
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Police Station:</span>
                <span className="font-semibold">{house.policeStation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Inspector Name:</span>
                <span className="font-semibold">{house.inspectorName}</span>
              </div>
              {house.verificationDate && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verification Date:</span>
                    <span className="font-semibold">
                      {new Date(house.verificationDate).toLocaleDateString(
                        'en-IN',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valid Until:</span>
                    <span className="font-semibold">
                      {new Date(house.expiryDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-md p-3 mt-4">
                    <p className="text-sm text-green-800">
                      ✓ Verification is valid for 24 months from the date of
                      verification
                    </p>
                  </div>
                </>
              )}
              {!house.verificationDate && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                  <p className="text-sm text-yellow-800">
                    ⏳ Verification pending. Awaiting police inspection.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Blockchain Proof */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Blockchain Verification
            </h2>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔗</div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2">
                    Tamper-Proof Authentication
                  </h3>
                  <p className="text-sm text-indigo-800 mb-3">
                    This verification record is stored on blockchain, ensuring
                    data integrity and preventing unauthorized modifications.
                  </p>
                  {house.verificationDate && (
                    <div className="bg-white rounded-md p-3 font-mono text-xs text-gray-600 break-all">
                      Block Hash: 0x{Math.random().toString(36).substring(2, 15)}
                      {Math.random().toString(36).substring(2, 15)}
                      {Math.random().toString(36).substring(2, 15)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              to={`/request-details/${house.id}`}
              className="flex-1 bg-gradient-to-r from-jet-black to-pine-teal text-white text-center py-3 rounded-lg hover:shadow-lg transition font-semibold"
            >
              Request Additional Details
            </Link>
            <Link
              to="/dashboard"
              className="flex-1 bg-ash-grey text-jet-black text-center py-3 rounded-lg hover:bg-grey-olive hover:text-white transition font-semibold"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <span>🔒</span>
            <span>Privacy Protection</span>
          </h4>
          <p className="text-sm text-blue-800">
            Only verification status is displayed to protect privacy. Criminal
            history details are not publicly visible. If you have concerns, you
            can submit a "Demand History Request" which will be reviewed by the
            local police station.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
