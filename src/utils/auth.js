const AUTH_TOKEN = 'auth-token';

export const getToken = () => {
  return window.localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  window.localStorage.setItem(AUTH_TOKEN, token);
};
