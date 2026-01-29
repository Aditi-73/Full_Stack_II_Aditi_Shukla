import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { houses } from '../data/mockData';

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const house = houses.find((h) => h.id === id);
  
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!reason.trim()) {
      alert('Please provide a reason for requesting details');
      return;
    }

    // Simulate submission
    setSubmitted(true);
    
    // Auto redirect after 3 seconds
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

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

  if (submitted) {
    return (
      <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ash-grey rounded-xl shadow-lg p-12 text-center">
            <div className="text-7xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Request Submitted Successfully
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Your demand history request has been submitted to the local police station.
            </p>
            <p className="text-gray-500 mb-8">
              The police will review your request and you will be notified of their decision.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-sm text-blue-800 space-y-2 text-left">
                <li>• Police station will review your request within 2-3 business days</li>
                <li>• They will verify your reason and determine if disclosure is warranted</li>
                <li>• If approved, you will get access to limited additional details</li>
                <li>• If rejected, you will be notified with the reason for rejection</li>
              </ul>
            </div>

            <Link
              to="/dashboard"
              className="inline-block bg-gradient-to-r from-jet-black to-pine-teal text-white px-8 py-3 rounded-lg hover:shadow-lg transition font-semibold"
            >
              Back to Dashboard
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Redirecting automatically in 3 seconds...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)] bg-transparent pt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to={`/house/${house.id}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 font-semibold"
        >
          ← Back to House Details
        </Link>

        {/* Request Form */}
        <div className="bg-ash-grey rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Demand History Request
            </h1>
            <p className="text-gray-600">
              Request additional verification details for {house.id}
            </p>
          </div>

          {/* House Info */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Property Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">House ID:</span>
                <span className="font-semibold">{house.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Society:</span>
                <span className="font-semibold">{house.society}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-semibold">
                  {house.area}, {house.city}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Occupant:</span>
                <span className="font-semibold">
                  {house.tenantName || house.ownerName} ({house.occupantType})
                </span>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
              <span>⚠️</span>
              <span>Important Notice</span>
            </h3>
            <ul className="text-sm text-orange-800 space-y-2">
              <li>
                • This request will be reviewed by the local police station
              </li>
              <li>
                • You must provide a valid reason for requesting additional details
              </li>
              <li>
                • False or frivolous requests may result in penalties
              </li>
              <li>
                • If approved, only limited information will be disclosed to you
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Reason for Request <span className="text-red-500">*</span>
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows="6"
                placeholder="Please provide a detailed reason for requesting additional verification details. Be specific about your concerns and why you need this information."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Minimum 50 characters required. Be as detailed as possible.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-jet-black to-pine-teal text-white py-3 rounded-lg hover:shadow-lg transition font-semibold"
              >
                Submit Request
              </button>
              <Link
                to={`/house/${house.id}`}
                className="flex-1 bg-ash-grey text-jet-black text-center py-3 rounded-lg hover:bg-grey-olive hover:text-white transition font-semibold"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <span>🔒</span>
            <span>Privacy & Review Process</span>
          </h4>
          <p className="text-sm text-blue-800">
            All demand history requests are carefully reviewed by police officials 
            to balance community safety with individual privacy rights. Requests 
            are evaluated based on the validity of concerns and potential risk factors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
