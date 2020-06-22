import axios from 'axios';
import { storage } from './storage';

axios.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = storage.getToken();
    if (token) {
      headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const apiUrls = {
  local: 'http://localhost:9000/api',
  prod: 'https://beetroot-class-server.herokuapp.com/api',
};

export const API_URL = apiUrls['prod'];

const url = {
  members: `${API_URL}/members`,
  login: `${API_URL}/login`,
  member: (id) => `${API_URL}/members/${id}`,
};

export const http = {
  getMembers: async () => {
    try {
      const { data } = await axios.get(url.members);
      return data;
    } catch (err) {
      return null;
    }
  },
  login: async (body) => {
    const { data } = await axios.post(url.login, body);
    return data;
  },
  addProject: async ({ id, body }) => {
    try {
      const { data } = await axios.patch(url.member(id), body);
      return data;
    } catch (err) {
      return null;
    }
  },
};
