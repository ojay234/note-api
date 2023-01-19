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
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "listing the note",
  handler: function () {
    console.log("List of note");
  },
});

yargs.command({
  command: "Read",
  describe: "listing the note",
  handler: function () {
    console.log("List of note");
  },
});

yargs.parse();
