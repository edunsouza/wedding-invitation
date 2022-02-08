const express = require('express');
const bodyParser = require('body-parser');

const { version } = require('./package.json');
const { cors, responseHandler, validateToken } = require('./middlewares');
const { loadEnv, isLocal, md5, } = require('./utils');
const { getAttendanceDb, getTokensDb, createToken, } = require('./helpers');
const schemas = require('./schemas');

const app = express();
app.use(bodyParser.json());
app.use(cors);
app.use(responseHandler);

app.post('/token', schemas.tokens, async (req, res) => {
  try {
    const { clientId, secret } = req.body;

    const db = getTokensDb(secret);
    const client = await db.get(clientId);

    if (!client?.secret || client.secret !== md5(secret)) {
      return res.userError('invalid credentials');
    }

    const jwt = createToken({ scope: 'attendance' });

    if (jwt.error) {
      throw jwt.error;
    }

    const { token, expiresIn } = jwt;
    await db.update({ expiresIn }, clientId);

    res.success({ token, expiresIn });
  } catch (error) {
    res.internalError(error);
  }
});

app.put('/confirm-attendance', schemas.confirmAttendance, async (req, res) => {
  try {
    const { attendee, attending } = req.body;
    const db = getAttendanceDb();
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

    return res.success({
      attendee,
      attending,
      confirmed: true,
    });
  } catch (error) {
    res.internalError(error);
  }
});

app.get('/attendees', validateToken, async (_req, res) => {
  try {
    const db = getAttendanceDb();
    const attendees = await db.fetch();
    res.success(attendees);
  } catch (error) {
    res.internalError(error);
  }
});

app.get('*', (_req, res) => res.success({
  'Wedding API': version,
}));

if (isLocal()) {
  const port = 1234;
  app.listen(port, () => console.log(`==== server listening to port ${port} ====`));
  loadEnv();
}

module.exports = app;