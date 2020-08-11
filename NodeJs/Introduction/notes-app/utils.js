const fs = require('fs');
const chalk = require('chalk');
 

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = getAllNotes();

    const duplicates = notes.filter(function (note) {
        return note.title === title
    })
    
    if (duplicates.length === 0) {
        const newNotes = { title: title, body: body };
        notes.push(newNotes);
        saveNotes(notes);
        console.log('New note added!')
    } else {
        console.log('Title name taken!')
    }

}

const saveNotes = function (notes) {

    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const getAllNotes = function () {
    try {
        const notes = fs.readFileSync('notes.json');
        const notesObject = JSON.parse(notes.toString());
        return notesObject;
    } catch (error) {
        return []
    }

}

const removeNotes = function (title) {
    const notes = getAllNotes();

    const duplicates = notes.filter(function (note) {
        return note.title !== title
    })
    console.log(duplicates);
    if(duplicates.length < notes.length) {
        saveNotes(duplicates);
        console.log( chalk.green.bold.inverse('Note Removed!'));
    } else {
        console.log( chalk.red.bold.inverse('No note found!'));
    }
    
}

const listNotes = () => {
    const notes = getAllNotes();
    console.log(chalk.green.bold.underline('Your Notes'));
    
    for (const key in notes) {
        console.log(chalk.blue.bold(notes[key].title));
    }
}

const readNotes = (title) => {
    const notes = getAllNotes();

    const matchingNote = notes.find(note => {
        return note.title === title
    })
    debugger
    if(!matchingNote) {
        console.log(chalk.red.bold('No note Found'))
    } else {
        console.log(chalk.black.italic.bgGreen.bold.underline(matchingNote.title))
        console.log(matchingNote.body);
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}
