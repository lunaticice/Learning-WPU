const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { body, validationResult, check } = require('express-validator');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// Setup method override
app.use(methodOverride('_method'));

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

// Add Contact Data
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    layout: 'layouts/main-layout',
    title: 'Add Contact Form',
  });
});

// Process Add Contact
app.post(
  '/contact',
  [
    body('name').custom(async (value) => {
      const duplicate = await Contact.findOne({ name: value });
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
      res.render('add-contact', {
        layout: 'layouts/main-layout',
        title: 'Add Contact Form',
        errors: errors.array(),
      });
    } else {
      Contact.insertMany(req.body, (error, result) => {
        // Send flash message
        req.flash('msg', 'Contact added successfully!');
        res.redirect('/contact');
      });
    }
  }
);

// Process Delete Contact
// app.get('/contact/delete/:name', async (req, res) => {
//   const contact = await Contact.findOne({ name: req.params.name });

//   // If contact not exists
//   if (!contact) {
//     res.status(404);
//     res.send('<h1>404</h1>');
//   } else {
//     Contact.deleteOne({ _id: contact._id }).then((result) => {
//       req.flash('msg', 'Contact deleted successfully!');
//       res.redirect('/contact');
//     });
//   }
// });
app.delete('/contact', (req, res) => {
  Contact.deleteOne({ name: req.body.name }).then((result) => {
    req.flash('msg', 'Contact deleted successfully!');
    res.redirect('/contact');
  });
});

// Edit Contact
app.get('/contact/edit/:name', async (req, res) => {
  const contact = await Contact.findOne({ name: req.params.name });

  res.render('edit-contact', {
    layout: 'layouts/main-layout',
    title: 'Edit Contact Form',
    contact,
  });
});

// Process Edit Contact Data
app.put(
  '/contact',
  [
    body('name').custom(async (value, { req }) => {
      const duplicate = await Contact.findOne({ name: value });
      if (value !== req.body.oldName && duplicate) {
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
      res.render('edit-contact', {
        layout: 'layouts/main-layout',
        title: 'Edit Contact Form',
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      Contact.updateOne(
        { _id: req.body._id },
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
          },
        }
      ).then((result) => {
        // Send flash message
        req.flash('msg', 'Contact added successfully!');
        res.redirect('/contact');
      });
    }
  }
);

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
