// Core Module
// File System
const fs = require('fs');

// menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync('data/test.txt', 'Hello World secara synchronous');
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('test.txt', 'Hello World secara Asynchronous', (e) => {
//   console.log(e);
// });

// membaca isi file secara synchronous
// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data);

// membaca isi file secara asynchronous
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name ? ', (name) => {
  rl.question('How old are you : ? ', (age) => {
    const contact = { name, age };
    const file = fs.readFileSync('contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);
    fs.writeFileSync('contacts.json', JSON.stringify(contacts));

    console.log('Welcome to Lunatic Project');

    rl.close();
  });
});
