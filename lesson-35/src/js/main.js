import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import { http } from './http';
import { storage } from './storage';
import Clusterize from 'clusterize.js';
import 'clusterize.js/clusterize.css'

const renderAnswer = (data) =>
  (document.getElementById('answer').innerHTML = data);

const renderCharacters = (dataList) => {
  const getCard = ({
    bloodStatus,
    deathEater,
    dumbledoresArmy,
    house,
    ministryOfMagic,
    name,
    orderOfThePhoenix,
    role,
    school,
    species,
  }) => `
  <div class="uk-card uk-card-default uk-card-hover uk-card-body characters__card">
      <h3 class="uk-card-title">${name}</h3>
      ${school || house ? `<h4 class="uk-text-emphasis">${school}${house ? `, ${house}` : ''}</h4>` : ''}
      <ul class="uk-list uk-list-divider uk-text-left">
        <li>Role: ${role}</li>
        <li>Species: ${species}</li>
        <li>Blood Status: ${bloodStatus}</li>
        <li>Death Eater: ${deathEater ? 'Yes' : 'No'}</li>
        <li>Dumbledores Army: ${dumbledoresArmy ? 'Yes' : 'No'}</li>
        <li>Ministry Of Magic: ${ministryOfMagic ? 'Yes' : 'No'}</li>
        <li>Order Of The Phoenix: ${orderOfThePhoenix ? 'Yes' : 'No'}</li>
      </ul>
</div>`;
  const data = dataList.map(getCard);
  const clusterize = new Clusterize({
    rows: data,
    scrollId: 'scrollArea',
    contentId: 'contentArea'
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  const $button = document.getElementById('ask');
  const $hatContainer = document.getElementById('hat');

  renderAnswer(storage.getAnswer());
  renderCharacters(storage.getCharacters());

  const characters = await http.getCharacters();
  if (characters) {
    renderCharacters(characters);
    storage.saveCharacters(characters);
  };

  $button.addEventListener('click', async () => {
    $hatContainer.classList.add('loading');
    const data = await http.askHat();
    if (data) {
      renderAnswer(data);
      storage.saveAnswer(data);
    }
    $hatContainer.classList.remove('loading');
  });
});
