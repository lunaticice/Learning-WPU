const fs = require('fs');

// Create directory data if not exists
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Create file contacts.json if not exists
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf8');
}

// Load all contacts
const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

// Find contact by name
const findContact = (name) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
  return contact;
};

// Rewrite contacts.json
const saveContacts = (contacts) => {
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
};

// Add new contact
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// Check duplicate
const checkDuplicate = (name) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.name === name);
};

module.exports = { loadContact, findContact, addContact, checkDuplicate };
