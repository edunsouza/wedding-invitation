const fetch = require('node-fetch');

const app = require('./index');
const { loadEnv } = require('./utils');

const PORT = 1234;
const API = `http://localhost:${PORT}`;

const request = async (path, method, headers, body) => await fetch(`${API}/${path}`, {
  method,
  headers: { 'content-type': 'application/json', ...headers },
  body: method !== 'GET' ? JSON.stringify(body) : undefined
}).then(r => r.json());

const get = async (path, headers) => await request(path, 'GET', headers);
const post = async (path, body, headers) => await request(path, 'POST', headers, body);
const put = async (path, body, headers) => await request(path, 'PUT', headers, body);

// ----

// pre-req: npm run dev in parallel
describe('authentication', () => {
  let server = null;

  beforeAll(() => {
    process.env.NODE_ENV = 'local';
    loadEnv();
    server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  });

  afterAll(() => {
    server.close();
  });

  it('should fail to authenticate', async () => {
    const { error, message } = await post('token', {
      clientId: 'invalid_clientId',
      secret: 'invalid_password'
    });

    expect(error).toBe(true);
    expect(message).toEqual('invalid credentials');
  });

  it('should fail to retrieve attendees list', async () => {
    const token = '1NV4L1D T0K3N';
    const { error, message } = await get('attendees', {
      authorization: `Bearer ${token}`
    });

    expect(error).toBe(true);
    expect(message).toEqual('invalid access token');
  });

  it('should authenticate and retrieve attendees list', async () => {
    const { token, expiresIn } = await post('token', {
      clientId: 'dev_key',
      secret: 'dev_password'
    });

    const attendees = await get('attendees', {
      authorization: `Bearer ${token}`
    });

    expect(token).toBeDefined();
    expect(attendees).toBeDefined();
    expect(expiresIn).toBeGreaterThan(Date.now());
    expect(attendees.length).toBeGreaterThan(0);
  });

  it('should confirm attendance as attending', async () => {
    const personName = 'person attending';
    const isAttending = true;
    const { attendee, attending, confirmed, } = await put('confirm-attendance', {
      attendee: personName,
      attending: isAttending
    });

    expect(attendee).toEqual(personName);
    expect(attending).toBe(isAttending);
    expect(confirmed).toBe(true);
  });

  it('should confirm attendance as NOT attending', async () => {
    const personName = 'person NOT attending';
    const isAttending = false;
    const { attendee, attending, confirmed, } = await put('confirm-attendance', {
      attendee: personName,
      attending: isAttending
    });

    expect(attendee).toEqual(personName);
    expect(attending).toBe(isAttending);
    expect(confirmed).toBe(true);
  });
});