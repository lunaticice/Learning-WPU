const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

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

const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

const saveContact = (name, email, phoneNumber) => {
  const contact = { name, email, phoneNumber };
  const contacts = loadContact();

  // check duplicates
  const duplicate = contacts.find((contact) => contact.name === name);
  if (duplicate) {
    console.log(chalk.red.inverse.bold('Contact already registered.'));
    return false;
  }

  // check email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Invalid email.'));
      return false;
    }
  }

  // check phoneNumber
  if (!validator.isMobilePhone(phoneNumber, 'id-ID')) {
    console.log(chalk.red.inverse.bold('Invalid phone number.'));
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log(chalk.green.inverse.bold('Thankyou for submitting data!'));
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold('Contact List : '));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.phoneNumber}`);
  });
};

const detailContact = (name) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

  if (!contact) {
    console.log(chalk.red.inverse.bold('Contact not found.'));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.name));
  console.log(contact.phoneNumber);
  contact.email ? console.log(contact.email) : console.log('');
};

const deleteContact = (name) => {
  const contacts = loadContact();
  const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold('Contact not found.'));
    return false;
  }

  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
  console.log(chalk.green.inverse.bold(`${name} deleted successfully`));
};

module.exports = { saveContact, listContact, detailContact, deleteContact };
