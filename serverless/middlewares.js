const { decodeToken } = require('./helpers');

const cors = (_request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
};

const responseHandler = (_request, response, next) => {
  const send = (log, status, message) => {
    console.log(log, message);
    const error = status > 399;
    const payload = error ? { error, message } : message;
    return response.status(status).json(payload);
  };

  response.success = json => send('sent data:', 200, json);
  response.userError = error => send('bad request:', 400, error);
  response.internalError = error => send('internal error:', 500, error);
  next();
};

const validateToken = (request, response, next) => {
  const [_type, token] = request.get('authorization')?.split(/\s/);
  const jwt = decodeToken(token);
  if (jwt.error) {
    response.userError('invalid access token');
    return;
  }
  next();
};

module.exports = {
  cors,
  responseHandler,
  validateToken,
};