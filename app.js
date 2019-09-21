const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder:{
        title:{
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        description:{
            description: 'Description for note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.green('Title: ' + argv.title))
        console.log(chalk.blue('Description: ' + argv.description))
    }
})
yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    handler: function () {
        console.log(chalk.green('Removing note!'))
    }
})
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: function () {
        console.log(chalk.green('Listing all notes!'))
    }
})
yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function () {
        console.log(chalk.green('Reading a note!'))
    }
})

yargs.parse()