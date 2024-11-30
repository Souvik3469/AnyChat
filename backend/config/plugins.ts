module.exports = {
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: process.env.JWT_SECRET || 'your-secret-key', // Ensure JWT secret is in your environment variables
    },
  },
};

