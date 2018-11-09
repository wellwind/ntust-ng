const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.post('/login', (req, res) => {
  res.jsonp({
    token: 'abcd1234'
  })
});

server.post('/register', (req, res) => {
  res.jsonp({
    success: true
  })
});

server.post('/orders', (req, res) => {
  res.jsonp({
    success: true
  })
});

server.get('/products', (req, res) => {
  res.jsonp([{
      name: "Product A",
      description: "Hello....",
      price: 100
    },
    {
      name: "Product B",
      description: "World!!!",
      price: 180
    }
  ])
});


// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
});
