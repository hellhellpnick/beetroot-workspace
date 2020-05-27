import StorageService from './Storage';

export const BASE_URL = 'http://localhost:9000/api';

export const url = {
  login: `${BASE_URL}/login`,
  profile: `${BASE_URL}/profile`,
};

class HttpService extends StorageService {
  _get = async (url, params) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.getToken(),
        },
        ...params,
      });
      const data = await response.json();
      console.log(`[GET]: ${url}:`, data);
      return data;
    } catch (err) {
      console.log(`[ERROR] (GET: ${url})`, error);
      return null;
    }
  };
  _post = async (url, body, params) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.getToken(),
        },
        ...params,
      });
      const data = await response.json();
      console.log(`[POST]: ${url}:`, data);
      return data;
    } catch (err) {
      console.log(`[ERROR] (POST: ${url})`, error);
      return null;
    }
  };
  login = async (body) => this._post(url.login, body);
  getProfile = async () => this._get(url.profile);
}

export default HttpService;
