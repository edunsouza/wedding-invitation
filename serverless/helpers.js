const { Deta } = require('deta');
const jwt = require('jsonwebtoken');

const { isLocal, md5 } = require('./utils');

const mockedDatabase = {
  fetch: async () => [{ key: 'person', attending: true }],
  update: async () => true,
  put: async () => ({ success: true }),
  get: async key => ({
    dev_key: {
      key: 'dev_key',
      secret: md5('dev_password'),
    },
  })[key],
};

const getDatabase = name => isLocal() ? mockedDatabase : Deta().Base(name);

const getAttendanceDb = () => getDatabase(process.env.ATTENDANCE_DB);

const getTokensDb = () => getDatabase(process.env.TOKENS_DB);

const createToken = payload => {
  try {
    const lifeSpan = 60 * 60 * 24 * 70;
    const iat = Date.now();
    const exp = iat / 1000 + lifeSpan;
    const data = { ...payload, exp };
    const token = jwt.sign(data, process.env.CERT);
    return {
      token,
      iat,
      expiresIn: exp * 1000,
    };
  } catch (error) {
    return { error };
  }
};

const decodeToken = token => {
  try {
    return jwt.verify(token, process.env.CERT);
  } catch (error) {
    return { error };
  }
};

const validateSchema = (data, schema) => {
  const getInvalidResponse = message => ({ valid: false, message });

  if (!data || !schema) {
    return getInvalidResponse('missing data');
  }

  const validators = {
    boolean: (value) => typeof value === 'boolean',
    string: (value) => typeof value === 'string',
    number: (value) => typeof value === 'number',
  };

  const missingKeys = Object.keys(schema).filter(k => data[k] === undefined);
  if (missingKeys.length) {
    return getInvalidResponse(`missing fields [${missingKeys.join(', ')}]`);
  }

  for (let [key, value] of Object.entries(data)) {
    const type = schema[key];
    const validator = validators[type] || (() => false);
    const invalidSchema = !validator(value);
    if (invalidSchema) {
      const expected = type === undefined ? 'accepted' : type;
      return getInvalidResponse(`field "${key}" is not ${expected}`);
    };
  }

  return { valid: true };
};

module.exports = {
  getAttendanceDb,
  getTokensDb,
  createToken,
  decodeToken,
  validateSchema,
};