const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Hello node.js'
}

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title == title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title) {
    const notes = loadNotes()

    const notesAfterRemoval = notes.filter(function (note) {
        return note.title != title
    })

    if (notes.length == notesAfterRemoval) {
        console.log(chalk.red('No note found with Title: ' + title))
    } else {
        saveNotes(notesAfterRemoval)
        console.log(chalk.green('Note Removed!'))
    }
}

const loadNotes = function () {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJson = databuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
