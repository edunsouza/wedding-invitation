import API from './api';

export const confirm = async ({ attendee, attending }) => {
  return await API.put('confirm-attendance', { attendee, attending });
};