import { Loader } from 'google-maps';
import { darkMode } from './darkMode';
import icon from './location.svg';
// import 'leaflet/dist/leaflet.css';
// import { map } from 'leaflet';

// const GOOGLE_API_KEY = 'AIzaSyC_FdMcEuZnzIK-WmsEAWDUSkK3brP4Chw';
// const options = {
//   region: 'UA',
// };
// const loader = new Loader(GOOGLE_API_KEY, options);

// const $LondonBtn = document.getElementById('london-btn');
// const $KremenBtn = document.getElementById('kremen-btn');

const KREMEN_LOCATION = { lat: 49.067373, lng: 33.413692 };
const LONDON_LOCATION = { lat: 51.560979, lng: -0.123536 };

// loader.load().then(function (google) {
//   const map = new google.maps.Map(document.getElementById('map'), {
//     center: KREMEN_LOCATION,
//     zoom: 10,
//     styles: darkMode,
//   });
//   const marker = new google.maps.Marker({
//     position: KREMEN_LOCATION,
//     map: map,
//     icon,
//   });
//   $LondonBtn.addEventListener('click', () => {
//     map.setCenter(LONDON_LOCATION);
//     marker.setPosition(LONDON_LOCATION);
//   });
//   $KremenBtn.addEventListener('click', () => {
//     map.setCenter(KREMEN_LOCATION);
//     marker.setPosition(KREMEN_LOCATION);
//   });
// });

const map = L.map('l-map').setView([KREMEN_LOCATION.lat, KREMEN_LOCATION.lng], 13);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

// window.initMap = function initMap() {
//   // The location of Uluru
//   var uluru = {lat: -25.344, lng: 131.036};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }
