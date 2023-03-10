//const fs = require("fs");
//fs.writeFileSync("notes.txt", "This file was created by Node.js");
//fs.appendFileSync("notes.txt", " i dae try");
//const validator = require("validator");

const yargs = require("yargs");
const notes = require("./notes.js");

//customise yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: "true",
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
//create list command
yargs.command({
  command: "list",
  describe: "listing the note",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: "true",
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
