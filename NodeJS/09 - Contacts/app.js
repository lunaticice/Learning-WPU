const yargs = require('yargs');
const { saveContact, listContact, detailContact, deleteContact } = require('./contacts');
// Get argument from command line
yargs
  .command({
    command: 'add',
    describe: 'Adding new contacts',
    builder: {
      name: {
        describe: 'Full Name',
        demandOption: true,
        type: 'string',
      },
      email: {
        describe: 'Email',
        demandOption: false,
        type: 'string',
      },
      phoneNumber: {
        describe: 'Phone Number',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      saveContact(argv.name, argv.email, argv.phoneNumber);
    },
  })
  .demandCommand();

// Get contact list
yargs.command({
  command: 'list',
  describe: 'Get contact list',
  handler() {
    listContact();
  },
});

// Get contact detail
yargs.command({
  command: 'detail',
  describe: 'Get contact detail by name',
  builder: {
    name: {
      describe: 'Full Name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    detailContact(argv.name);
  },
});

// Delete contact
yargs.command({
  command: 'delete',
  describe: 'Delete contact by name',
  builder: {
    name: {
      describe: 'Full Name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    deleteContact(argv.name);
  },
});

yargs.parse();
