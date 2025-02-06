// vite.config.js

export default {
  server: {
    host: '0.0.0.0', // Allow all incoming connections
    allowedHosts: [
      'finition108.io', // Add your domain here
      'localhost',       // Optionally, add localhost for local development
    ],
  },
};
