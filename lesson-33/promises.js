const login = (email, password) => {
  console.log(`login start`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`login end`);
      if (!email || !password) {
        reject('Something wrong');
        return;
      }
      resolve({
        name: 'Sasha',
        email,
        age: 27,
      });
    }, 3000);
  });
};

login('example@gmail.com', 'password')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('lalala');
  });

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const user = await login('asyncawait@gmail.com', 'password');
    const user = await login('asyncawait@gmail.com', 'password');
    return user;
  } catch (err) {
    console.log('Async Await Error', err);
  } finally {
    console.log('final');
  }
})