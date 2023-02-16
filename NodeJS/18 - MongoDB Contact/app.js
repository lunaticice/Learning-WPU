const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Config flash
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Home page
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

// About Page
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About',
  });
});

// Contact Page
app.get('/contact', async (req, res) => {
  const contacts = await Contact.find();

  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact',
    contacts,
    msg: req.flash('msg'),
  });
});

// Detail Contact
app.get('/contact/:name', async (req, res) => {
  const contact = await Contact.findOne({ name: req.params.name });

  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Detail Contact',
    contact,
  });
});

app.listen(port, () => {
  console.log(`MongoDB Contact App | listening at http://localhost:${port}`);
});
