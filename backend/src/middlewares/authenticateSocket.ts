const authenticateSocket = (socket, callback) => {
  // Simulate authentication logic
  const token = socket.upgradeReq.headers['authorization'];

  if (!token) {
    return callback(new Error('No token provided'));
  }

  // Simulate a successful authentication check
  if (token === 'valid-token') {
    return callback(null);
  }

  callback(new Error('Invalid token'));
};

export default authenticateSocket;
