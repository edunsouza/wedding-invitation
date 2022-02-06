const express = require('express');
const bodyParser = require('body-parser');

const { getDatabase, validateSchema } = require('./helpers');
const { version } = require('./package.json');

const app = express();
app.use(bodyParser.json());
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('*', (request, response) => response.json({
  'Wedding API': version
}));

app.put('/confirm-attendance', async (request, response) => {
  const payload = validateSchema(request.body, {
    attendee: 'string',
    attending: 'boolean'
  });

  if (!payload.valid) {
    return response.status(400).json(payload);
  }

  try {
    const { attendee, attending } = request.body;
    const db = getDatabase();
    const existing = await db.get(attendee);
    const updateAt = new Date().toISOString();
    const createdAt = existing?.createdAt
      ? existing.createdAt
      : updateAt;

    await db.put({
      attending,
      createdAt,
      updateAt
    }, attendee);

    return response
      .status(200)
      .json({ confirmed: true });
  } catch (error) {
    console.error(error);

    return response
      .status(500)
      .json({ error });
  }
});

module.exports = app;