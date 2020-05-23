import UIkit from "uikit";

export const BASE_URL = 'https://www.potterapi.com/v1';
export const API_KEY =
  '$2a$10$XmJbGUGcVZTGD9IenGYf9ek.8xtdZ2TG4RPSv9GT5uVYheQ572fbe';
export const useApiKey = (url) => `${url}/?key=${API_KEY}`;

export const url = {
  hat: `${BASE_URL}/sortingHat`,
  characters: useApiKey(`${BASE_URL}/characters`),
  houses: useApiKey(`${BASE_URL}/houses`),
  spells: useApiKey(`${BASE_URL}/spells`),
};

export const http = {
  async askHat() {
    try {
      const response = await fetch(url.hat);
      const data = await response.json();
      if (response.status > 210) {
        UIkit.notification({message: data?.error, status: 'warning'});
        return null;
      }
      return data;
    } catch (err) {
      console.log('Something wrong...', err?.response);
      UIkit.notification({message: 'Something wrong...', status: 'warning'});
      return null;
    }
  },
  async getCharacters() {
    try {
      const response = await fetch(url.characters);
      const data = await response.json();
      if (response.status > 210) {
        UIkit.notification({message: data?.error, status: 'warning'});
        return null;
      }
      return data;
    } catch (err) {
      console.log('Something wrong...', err);
      UIkit.notification({message: 'Something wrong...', status: 'warning'});
      return null;
    }
  },
};
