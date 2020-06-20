const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./auth');

const port = process.env.PORT || 9000;
const JWT_SECRET = 'beetroot-class';

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.json({ status: 'Beetroot-class server is running' });
});

server.get('/api', (req, res) => {
  res.json({
    members: '/api/members',
    member: '/api/members/:id',
  });
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  if (username && password) {
    const { members } = auth;
    const idx = members.findIndex(
      (item, idx) => item.id === username && item.password === password
    );
    console.log(idx);
    if (idx >= 0) {
      const { [idx]: user } = members;
      const token = jwt.sign({ username, name: user.name }, JWT_SECRET, {});
      res.json({ username, name: user.name, token });
    } else {
      return res.status(401).jsonp({
        error: 'Invalid username or password',
      });
    }
  } else {
    return res.status(401).jsonp({
      error: 'Invalid username or password',
    });
  }
});

server.use((req, res, next) => {
  const path = req && req.route && req.route.path;
  const method = req.method;
  console.log(method, req.path);
  if (req.url.includes('api') && method === 'POST') {
    try {
      req.user = jwt.verify(req.headers['authorization'], JWT_SECRET);
    } catch (err) {
      return res.status(401).jsonp({
        error: 'Unauthorized',
      });
    }
  }
  next();
  return;
});

server.use(middlewares);
server.use('/api', router);

server.listen(port);
