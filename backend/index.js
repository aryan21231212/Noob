// Main server file for campaign donation platform
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { connectDB } = require("./db");
const Campaign = require('./models/Campaign');

const app = express();

// Basic middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB(process.env.MONGO_URL);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server running!' });
});

// Get all campaigns
app.get('/api/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find({ isActive: true });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single campaign
app.get('/api/campaigns/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new campaign
app.post('/api/campaigns', async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    console.log(campaign);
    res.status(201).json(campaign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update campaign (for donations)
app.put('/api/campaigns/:id/donate', async (req, res) => {
  try {
    const { amount } = req.body;
    const campaign = await Campaign.findById(req.params.id);
    
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    
    await campaign.addDonation(amount);
    res.json(campaign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete campaign
app.delete('/api/campaigns/:id', async (req, res) => {
  try {
    await Campaign.findByIdAndDelete(req.params.id);
    res.json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});