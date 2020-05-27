import Router from './services/Router';
import HttpService from './services/Http';

const http = new HttpService();
const router = new Router();

router.withAuth('home');

const render = (id, data) => {
  document.getElementById(id).innerHTML = data;
};

const renderImage = (id, src) => {
  document.getElementById(id).setAttribute('src', src);
};

document.addEventListener('DOMContentLoaded', async () => {
  const $logoutBtn = document.getElementById('logout');
  $logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    router.removeAuth();
    router.withAuth('home');
  })
  const data = await http.getProfile();
  if (data) {
    render('name', data.name);
    render(
      'date',
      new Date(data.created_at).toLocaleString('ru', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    );
    renderImage('avatar', data.avatar);
    render('list', `
      <li>Email: <b>${data.email}</b></li>
      <li>Country: <b>${data.country}</b></li>
      <li>City: <b>${data.coty}</b></li>
      <li>Address: <b>${data.address}</b></li>
      <li>Company: <b>${data.company}</b></li>
    `);
  }
});
