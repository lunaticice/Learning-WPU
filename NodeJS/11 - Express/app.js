const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.send('Hello World!');
  // res.json({
  //   name: 'Luna',
  //   email: 'luna@gmail.com',
  //   phoneNumber: '081211112222',
  // });
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
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

// const http = require('http');
// const fs = require('fs');

// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (e, data) => {
//     if (e) {
//       res.writeHead(404);
//       res.write('Error: file not found');
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type': 'text/html',
//     });

//     const url = req.url;

//     switch (url) {
//       case '/about':
//         renderHTML('./about.html', res);
//         break;
//       case '/about':
//         renderHTML('./contact.html', res);
//         break;
//       default:
//         renderHTML('./index.html', res);
//         break;
//     }
//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}...`);
//   });
