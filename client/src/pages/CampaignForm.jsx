import { useState } from 'react';
import api from '../api/api'; // Import your axios instance

export default function CampaignForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    email: '',
    phone: '',
    organizationType: '',
    registrationNumber: '',
    city: '',
    state: '',
    category: '',
    fundingGoal: '',
    image: '',
    branch: '',
    priority: 5,
    reason: '',
    domain: '',
    bestProject: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const organizationTypes = ['NGO', 'Non-profit', 'Charity', 'Foundation', 'Other'];
  const categories = ['Education', 'Healthcare', 'Environment', 'Disaster Relief', 'Poverty', 'Animal Welfare', 'Other'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  // Submit form using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await api.post('/campaigns', formData); // Using axios

      setMessage('Campaign registered successfully! 🎉');

      // Reset form
      setFormData({
        name: '',
        description: '',
        email: '',
        phone: '',
        organizationType: '',
        registrationNumber: '',
        city: '',
        state: '',
        category: '',
        fundingGoal: '',
        image: '',
        branch: '',
        priority: 5,
        reason: '',
        domain: '',
        bestProject: ''
      });

      console.log('Response:', response.data);
    } catch (error) {
      if (error.response) {
        // Backend error
        setMessage(`Error: ${error.response.data.error || 'Something went wrong'}`);
      } else if (error.request) {
        // Network error
        setMessage('Network error. Please try again.');
      } else {
        setMessage('Unexpected error occurred.');
      }
      console.error('Axios Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Register Your Campaign</h1>
          <p className="text-gray-600">Join our trusted platform to make a difference</p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4" style={{ backgroundColor: '#94cf35' }}></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            
            <div className="border-l-4 pl-4" style={{ borderColor: '#94cf35' }}>
              <h2 className="text-xl font-semibold text-black mb-4">Basic Information</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Campaign Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                style={{ focusRingColor: '#94cf35' }}
                placeholder="Enter your campaign name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none"
                style={{ focusRingColor: '#94cf35' }}
                placeholder="Describe your campaign and its impact..."
              />
            </div>

            <div className="border-l-4 pl-4 mt-8" style={{ borderColor: '#94cf35' }}>
              <h2 className="text-xl font-semibold text-black mb-4">Contact Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  placeholder="9876543210"
                />
              </div>
            </div>

            <div className="border-l-4 pl-4 mt-8" style={{ borderColor: '#94cf35' }}>
              <h2 className="text-xl font-semibold text-black mb-4">Organization Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Organization Type *</label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                >
                  <option value="">Select type</option>
                  {organizationTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Registration Number *</label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  placeholder="NGO/2024/XX/12345"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  placeholder="Mumbai"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  placeholder="Maharashtra"
                />
              </div>
            </div>

            <div className="border-l-4 pl-4 mt-8" style={{ borderColor: '#94cf35' }}>
              <h2 className="text-xl font-semibold text-black mb-4">Campaign Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Funding Goal (₹) *</label>
                <input
                  type="number"
                  name="fundingGoal"
                  value={formData.fundingGoal}
                  onChange={handleChange}
                  required
                  min="1000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  placeholder="100000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Campaign Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="border-l-4 pl-4 mt-8" style={{ borderColor: '#94cf35' }}>
              <h2 className="text-xl font-semibold text-black mb-4">Additional Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Branch/Department</label>
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  placeholder="Education & Development"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Priority (1-10)</label>
                <input
                  type="number"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Domain</label>
              <input
                type="text"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                placeholder="Rural Education"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Reason for Campaign</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none"
                placeholder="Why is this campaign needed?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Best Project/Achievement</label>
              <textarea
                name="bestProject"
                value={formData.bestProject}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none"
                placeholder="Tell us about your most successful project..."
              />
            </div>

            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 px-6 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: loading ? '#6b7280' : '#94cf35' }}
              >
                {loading ? 'Registering Campaign...' : 'Register Campaign'}
              </button>
            </div>

            {message && (
              <div className={`p-4 rounded-lg text-center font-medium ${
                message.includes('successfully') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message}
              </div>
            )}

          </div>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            By registering, you agree to our terms of service and privacy policy.
          </p>
          <p className="text-sm mt-2">
            Our team will review and verify your campaign within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}