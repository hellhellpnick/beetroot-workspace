import axios from 'axios';

const apiUrls = {
  local: 'http://localhost:9000/api',
  prod: 'http://localhost:9000/api',
};

export const API_URL = apiUrls['local'];

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
