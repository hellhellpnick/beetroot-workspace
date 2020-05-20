const getAlbums = async () => {
  try {
    const response = await fetch('https://picsum.photos/v2/list');
    const data = await response.json();
    console.log(data);
  } catch(err) {
    console.log('Albums not loaded', err);
  }
};

getAlbums();