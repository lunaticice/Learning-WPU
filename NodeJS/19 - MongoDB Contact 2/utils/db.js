const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/LunaticProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Add 1 data
// const contact1 = new Contact({
//   name: 'Lorelei',
//   phoneNumber: '081212345678',
//   email: 'lorelei@gmail.com',
// });

// Save to collection
// contact1.save().then((contact) => console.log(contact));
