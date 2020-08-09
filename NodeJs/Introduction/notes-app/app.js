const notes = require('./utils.js');
// console.log(notes());

// const chalk = require('chalk');
// console.log(chalk.blue('Iam ')+ chalk.green.bold.inverse.underline('Neha ') + chalk.red('Singh'));

// const validator = require('validator');
// console.log(validator.isEmail('neha@bswi.com'));


const yargs = require('yargs');
// console.log(yargs.argv);

yargs
    .command({
    command : 'add',
    describe: 'Add a note!',
    builder : {
        title : {
            describe: 'Note Title'
        },
        body : {
            describe : 'Body of Notes',
            demandOption : true,
            type : 'string'
        }
    },
    handler : argv => {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs
    .command({
    command : 'remove',
    describe: 'remove a note!',
    builder : {
        title : {
            describe: 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : argv => {
        notes.removeNotes(argv.title);
    }
})



yargs.command({
    command : 'list',
    describe: 'list all notes!',
    handler : function () {
       notes.listNotes();
    }
})

yargs.command({
    command : 'read',
    describe: 'Read a note!',
    builder : {
        title : {
            describe: 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : args => {
        notes.readNotes(args.title);
    }
})

yargs.parse();