const fecthUser = (id) => {
  return {
    id,
    name: `UserName ${id}`,
    age: Math.floor(Math.random() * 101),
    street: "1519 Tovos Mill",
    city: "Rohwuzkim",
    phone: "(584) 634-2152",
    email: "bumaceah@ki.pe",
  };
};

const fetchTeam = (name) => {
  const id = Math.floor(Math.random() * 10000);
  return {
    id,
    name: `Team ${id}`,
    contry: 'Iraq',
    members: [{name}]
  }
}

class User {
  constructor(user) {
    this.id = user?.id;
    this.name = user?.name;
    this.surname = user?.surname;
    this.email = user?.email;
    this.street = user?.street;
    this.city = user?.city;
    this.phone = user?.phone;
    this.location = `city: "${this.city}", street: "${this.street}"`
    console.log(`New User: ${this.name}`);
  }
  get fullName() {
    return `${this.name} ${this.surname}`
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.name = firstName;
    this.surname = lastName;
  }
  hello = () => {
    console.log(`Hello, ${this.name}!`);
  };
  getTeam = () => {
    return fetchTeam(this.name);
  }
}

class AdminUser extends User {
  constructor(user) {
    super(user);
    this.role = 'Admin';
  }
  getUsers = () => {
    return [12, 22, 33].map(fecthUser);
  }
}

const user = new User(fecthUser(24));
const user2 = new User(fecthUser(2));

const admin = new AdminUser(fecthUser(100));

console.log(user.fullName);
user.fullName = 'Sasha Ratushnyi';
console.log(user.fullName);
console.log(user);

class Clock {
  timer;
  constructor() {
    this.date = new Date();
    this.updateTime();
  }
  updateTime = () => {
    setInterval(() => this.date = new Date(), 1000);
  }
  getTime = () => {
    this.timer = setInterval(() => {
      console.log(this.date.toLocaleTimeString());
    }, 1000)
  }
}

