import API from './api';

export const confirm = async ({ attendee, attending }) => {
  return await API.put('confirm-attendance', { attendee, attending });
};

export const list = async ({ token }) => {
  const headers = new Headers({ Authorization: `Bearer ${token}` });
  return await API.get('attendees', headers);
};

export const access = async ({ password }) => {
  return await API.post('token', { password });
};