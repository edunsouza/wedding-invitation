const { Deta } = require('deta');

const getDatabase = () => {
  const instance = Deta();
  return instance.Base(process.env.DB_NAME);
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

  const missingKeys = Object.keys(schema).filter(k => !data[k]);
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
  getDatabase,
  validateSchema,
};