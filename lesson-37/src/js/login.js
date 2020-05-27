import HttpService from './services/Http';
import StorageService from './services/Storage';
import Router from './services/Router';

const http = new HttpService();
const storage = new StorageService();
const router = new Router();

router.isAuth();

document.addEventListener('DOMContentLoaded', () => {
  const $formLogin = document.forms.login;
  const $submitBtn = $formLogin.submit;
  const $emailInput = $formLogin.email;
  const $passwordInput = $formLogin.password;
  $formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = $emailInput.value;
    const password = $passwordInput.value;
    const data = await http.login({ email, password });
    if (data) {
      storage.saveAuth(data);
      router.isAuth();
    }
  });
});
