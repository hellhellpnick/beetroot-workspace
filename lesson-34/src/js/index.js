import { http } from './http';
import { render } from './render';

http.getPhotos().then(data => {
  render.photos(data);
});
