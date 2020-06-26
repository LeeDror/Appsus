import { utils } from "../../services/utils.service.js";
const NOTE_KEY = "notes";

export const keepService = {
  getNotes,
  getNoteById,
  addNote,
  getNewNote,
  saveEditNote,
  removeNote
};

var gNotes = createNotes();

function addNote(type, content) {
  const newNote = {
    id: utils.getRandomId(),
    type: type,
    isPinned: false,
    style: { backgroundColor: "#ffffff", color: "#000000" },
    info: {
      title: content.title,
      url: content.text,
      text: content.text,
      todos: content.text.split(",").map(function(todo) { return {text: todo, doneAt: null}})
    },
  };
  gNotes.unshift(newNote);
  utils.storeToStorage(NOTE_KEY, gNotes);
}


function removeNote(deleteNote) {
  var idx = gNotes.findIndex((note) => note.id === deleteNote.id);
  gNotes.splice(idx, 1);
  utils.storeToStorage(NOTE_KEY, gNotes);
  return Promise.resolve(gNotes);
}

function getNewNote() {
  const note = {
    id: utils.getRandomId(),
    type: "noteText",
    isPinned: false,
    style: { backgroundColor: "#ffffff", color: "#000000" },
    info: {
      title: "",
      text: "",
    },
  };
  return Promise.resolve(note);
}

function saveEditNote(editNote) {
  var idx = gNotes.findIndex((note) => note.id === editNote.id);
  gNotes.splice(idx, 1, editNote);
  utils.storeToStorage(NOTE_KEY, gNotes);
  return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
  const note = gNotes.find((note) => note.id === noteId);
  return Promise.resolve(note);
}

function getNotes() {
  gNotes = utils.loadFromStorage(NOTE_KEY);
  if (gNotes) return Promise.resolve(gNotes);
  gNotes = createNotes();
  return Promise.resolve(utils.storeToStorage(NOTE_KEY, gNotes));
}

function createNotes() {
  return [
    {
      id: "1",
      type: "noteText",
      isPinned: false,
      style: { backgroundColor: "#ffffff", color: "#000000" },
      info: {
        title: "Me playing Mi11111",
        text: "Fullstack Me Baby!",
      },
    },
    {
      id: "2",
      type: "noteTodos",
      isPinned: true,
      style: { backgroundColor: "#ffffff", color: "#000000" },
      info: {
        title: "How was it:",
        todos: [
          { text: "eat", doneAt: null },
          { text: "drink", doneAt: 187111111 },
          { text: "sleep", doneAt: null },
        ],
      },
    },
    {
      id: "3",
      type: "noteImg",
      isPinned: false,
      style: { backgroundColor: "#ffffff", color: "#000000" },
      info: {
        url: "../img/keep/keep4.jpg",
        title: "Me playing Mi2222",
        text: "Fullstack Me Baby!",
      },
    },
    {
      id: "4",
      type: "noteImg",
      isPinned: true,
      style: { backgroundColor: "#ffffff", color: "#000000" },
      info: {
        url: "../img/keep/keep3.jpg",
        title: "LALALALA",
        text: "Fullstack Me Baby!",
      },
    },
    {
      id: "5",
      type: "noteImg",
      isPinned: false,
      style: { backgroundColor: "#ffffff", color: "#000000" },
      info: {
        url: "../img/keep/keep3.jpg",
        title: "LALALALA",
        text: "Fullstack Me Baby!",
      },
    },
    {
      id: "6",
      type: "noteImg",
      isPinned: true,
      style: { backgroundColor: "#ffffff", color: "#000000" },
      info: {
        url: "../img/keep/keep3.jpg",
        title: "LALALALA",
        text: "Fullstack Me Baby!",
      },
    },
    {
      id: "7",
      type: "noteTodos",
      isPinned: true,
      style: { backgroundColor: "#ffffff", color: "#000000" },
      info: {
        title: "How was it:",
        todos: [
          { text: "Do that", doneAt: null },
          { text: "Do this", doneAt: 187111111 },
        ],
      },
    },
  ];
}
