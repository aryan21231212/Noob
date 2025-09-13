const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: true,
    trim: true
  },
  
  description: {
    type: String,
    required: true,
    maxLength: 1000
  },
  
  // Contact
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  
  phone: {
    type: String,
    required: true
  },
  
  // Organization Details
  organizationType: {
    type: String,
    required: true,
    enum: ['NGO', 'Non-profit', 'Charity', 'Foundation', 'Other']
  },
  
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  
  // Location
  city: {
    type: String,
    required: true
  },
  
  state: {
    type: String,
    required: true
  },
  
  // Campaign Details
  category: {
    type: String,
    required: true,
    enum: ['Education', 'Healthcare', 'Environment', 'Disaster Relief', 'Poverty', 'Animal Welfare', 'Other']
  },
  
  // Financial
  fundingGoal: {
    type: Number,
    required: true,
    min: 1000
  },
  
  amountRaised: {
    type: Number,
    default: 0
  },
  
  // Media
  image: {
    type: String // URL to main image
  },
  
  // Status
  isActive: {
    type: Boolean,
    default: true
  },
  
  verificationStatus: {
    type: String,
    enum: ['Pending', 'Verified', 'Rejected'],
    default: 'Pending'
  },
  
  // Legacy fields from your original schema
  branch: String,
  priority: {
    type: Number,
    default: 5
  },
  reason: String,
  domain: String,
  bestProject: String

}, {
  timestamps: true
});



module.exports = mongoose.model('Campaign', campaignSchema);