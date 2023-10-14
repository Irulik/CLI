const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
const { program } = require("commander");


const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getContactById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      return console.log(newContact);
    case "removeContact":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    default:
      return console.log("Uknown action")
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "getContactById", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({ action: "add", name: "Olga", email: "Rossie_Macejkovic14@gmail.com", phone: "(537) 984-9996"});
// invokeAction({ action: "removeContact", id: "JhtZGdVpteGeYk2FClVSK", name: "Olga", email: "Rossie_Macejkovic14@gmail.com", phone: "(537) 984-9996"});

// console.log(process.argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex +1];
//   invokeAction({action})
// }


// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);


program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

const options = program.opts();
invokeAction(options);
    



