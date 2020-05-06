
import { url, getData } from './api';

getData(url).then(users => {
  users.forEach(user => {
    const item = document.createElement('li');
    item.innerHTML = `<h3>${user.name}</h3><div>${user.email}, ${user.website}</div>`
    document.getElementById('users').appendChild(item);
  });
})