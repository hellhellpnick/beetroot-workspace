class StorageService {
  authKey = 'auth-data';
  saveAuth = (data) => {
    localStorage.setItem(this.authKey, JSON.stringify(data));
  };
  getAuth = () => {
    const data = localStorage.getItem(this.authKey);
    return data ? JSON.parse(data) : undefined;
  };
  removeAuth = () => {
    localStorage.removeItem(this.authKey);
  };
  getToken = () => {
    const { token = '' } = this.getAuth() || {};
    return token;
  };
  hasToken = () => !!this.getToken();
}

export default StorageService;
