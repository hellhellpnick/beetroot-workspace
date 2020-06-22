const tokenAlias = 'token';
const userAlias = 'user';

export const storage = {
  setToken(token) {
    localStorage.setItem(tokenAlias, token);
  },
  getToken() {
    return localStorage.getItem(tokenAlias);
  },
  deleteToken() {
    localStorage.removeItem(tokenAlias);
  },
  setUser(user) {
    localStorage.setItem(userAlias, JSON.stringify(user));
  },
  getUser() {
    const user = localStorage.getItem(userAlias);
    return user ? JSON.parse(user) : {};
  },
  deleteUser() {
    localStorage.removeItem(userAlias);
  },
};
