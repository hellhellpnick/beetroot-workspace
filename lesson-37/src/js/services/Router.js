import StorageService from './Storage';

class Router extends StorageService {
  withAuth = (id) => {
    if (!this.hasToken()) {
      location.replace('/login');
    } else {
      document.getElementById(id).classList.add('active');
    }
  };
  isAuth = () => {
    if (this.hasToken()) location.replace('/');
  };
}

export default Router;
