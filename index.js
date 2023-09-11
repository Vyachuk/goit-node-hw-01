const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contactsMethods = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsMethods.listContacts();
      return console.table(allContacts);

    case "get":
      const contact = await contactsMethods.getContactById(id);
      return console.log(contact);

    case "add":
      const addNewContact = await contactsMethods.addContact({
        name,
        email,
        phone,
      });
      return console.log(addNewContact);

    case "remove":
      const removedContact = await contactsMethods.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
