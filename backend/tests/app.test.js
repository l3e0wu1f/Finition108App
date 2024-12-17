const request = require('supertest');
const express = require('express');

// Set up Express app
const app = express();

// Define the route you want to test
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back end!' });
});

// Test for the route
describe('GET /api', () => {
  it('should return a message from the back end', async () => {
    const response = await request(app).get('/api');
    
    // Assertions
    expect(response.status).toBe(200);  // Status should be 200
    expect(response.body.message).toBe('Hello from the back end!');  // Response should contain the correct message
  });
});