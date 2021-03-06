const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        description: {
            description: 'Description for note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.description)
    }
})
yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: function () {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    description: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()