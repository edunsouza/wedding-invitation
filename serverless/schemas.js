const { validateSchema } = require('./helpers');

const validate = schema => (request, response, next) => {
  const { valid, message } = validateSchema(request.body, schema);

  if (!valid) {
    return response.userError(message);
  }

  next();
};

module.exports = {
  tokens: validate({
    clientId: 'string',
    secret: 'string',
  }),
  confirmAttendance: validate({
    attendee: 'string',
    attending: 'boolean'
  })
};