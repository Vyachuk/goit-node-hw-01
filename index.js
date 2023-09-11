const contactsMethods = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsMethods.listContacts();
      return console.table(allContacts);

    case "getById":
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
}

// invokeAction({
//   action: "add",
//   name: "Ivan",
//   email: "ada2Ldsasd",
//   phone: "3434343434",
// });

// invokeAction({
//   action: "list",
// });

// invokeAction({
//   action: "getById",
//   id: "05olLMgyVQdWRwgKfg5J6",
// });

// invokeAction({
//   action: "remove",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
// });
