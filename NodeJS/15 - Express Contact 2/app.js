const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact, checkDuplicate } = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = 3000;

// Use EJS
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);

// Built-in middleware
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
  const contacts = loadContact();

  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact',
    contacts,
    msg: req.flash('msg'),
  });
});

// Add Contact Data
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    layout: 'layouts/main-layout',
    title: 'Add Contact Form',
  });
});

// Process Contact Data
app.post(
  '/contact',
  [
    body('name').custom((value) => {
      const duplicate = checkDuplicate(value);
      if (duplicate) {
        throw new Error('Contact already registered!');
      }
      return true;
    }),
    check('email', 'Invalid email!').isEmail(),
    check('phoneNumber', 'Invalid phone number!').isMobilePhone('id-ID'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('add-contact', {
        layout: 'layouts/main-layout',
        title: 'Add Contact Form',
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      // Send flash message
      req.flash('msg', 'Contact added successfully!');
      res.redirect('/contact');
    }
  }
);

// Detail Contact
app.get('/contact/:name', (req, res) => {
  const contact = findContact(req.params.name);

  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Detail Contact',
    contact,
  });
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
