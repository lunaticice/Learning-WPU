const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Use EJS
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {
  const characters = [
    {
      name: 'Jade',
      race: 'Human',
      type: 'INT',
    },
    {
      name: 'Linzy',
      race: 'Human',
      type: 'DEX',
    },
    {
      name: 'Talia',
      race: 'Fairy',
      type: 'INT',
    },
  ];
  res.render('index', {
    name: 'Luna',
    title: 'Home',
    characters,
    layout: 'layouts/main-layout',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact',
  });
});

app.get('/product/:id', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
