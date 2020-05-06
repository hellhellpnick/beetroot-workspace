const cart = [
  { name: 'Cheese', count: 1, bought: false },
  { name: 'Milk', count: 2, bought: true },
  { name: 'Eggs', count: 10, bought: false },
  { name: 'Tea', count: 1, bought: true },
  { name: 'Oil', count: 1, bought: false },
];

const source = [...cart];
console.log(source);

const showCard = () => {
  const sortedCart = [
    ...cart.sort((a, b) => {
      if (a.bought > b.bought) return -1;
      if (a.bought < b.bought) return 1;
      if (a.bought === b.bought) return 0;
    }),
  ];
  console.log('Sorted Cart: ', sortedCart);
};

const buy = (name) => {
  const idx = cart.findIndex(
    (product) => product.name.toLowerCase() === name.toLowerCase()
  );
  if (idx >= 0 && !cart[idx].bought) {
    cart.splice(idx, 1, { ...cart[idx], bought: true });
    console.log(`Buy ${name}: `, cart);
  } else if (idx >= 0) {
    console.log(`${name} have been bought`);
  } else {
    console.log(`Sorry... I can't find ${name} in the cart.`);
  }
};

const addToCart = (name) => {
  const idx = cart.findIndex(
    (product) => product.name.toLowerCase() === name.toLowerCase()
  );
  if (idx >= 0) {
    const product = cart[idx];
    cart.splice(idx, 1, { ...product, count: product.count + 1 });
  } else {
    cart.push({ name, count: 1, bought: false });
  }
  console.log(`Add ${name} to cart: `, cart);
};

showCard();
addToCart('Oil');
addToCart('Chocolate');
addToCart('chocolate');
buy('Eggs');
buy('tea');
buy('water');
