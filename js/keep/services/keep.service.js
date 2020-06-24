
import { utils } from "../../services/utils.service.js";



export const keepService = {
  getNotes,
  getNoteById,
  addNote,
};

var gNotes = createNotes();

function addNote(newNote) {
  newNote.id = utils.getRandomId();
  gBooks.unshift(newNote);
}

function getNotes() {
  return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
  const note = gNotes.find((note) => note.id === noteId);
  return Promise.resolve(note);
}

function createNotes() {
  return [
    {
      id: "1",
      type: "noteText",
      isPinned: false,
      style: { backgroundColor: "#00d" },
      info: {
        title: "Me playing Mi11111",
        text: "Fullstack Me Baby!",
      },
    },
    {
      id: "2",
      type: "noteTodos",
      isPinned: true,
      style: { backgroundColor: "#00d" },
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
      style: { backgroundColor: "#00d" },
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
      style: { backgroundColor: "#00d" },
      info: {
        url: "../img/keep/keep3.jpg",
        title: "LALALALA",
        text: "Fullstack Me Baby!",
      }
    },
    {
      id: "5",
      type: "noteImg",
      isPinned: false,
      style: { backgroundColor: "#00d" },
      info: {
        url: "../img/keep/keep3.jpg",
        title: "LALALALA",
        text: "Fullstack Me Baby!",
      }
    },
    {
      type: "6",
      type: "noteImg",
      isPinned: true,
      style: { backgroundColor: "#00d" },
      info: {
        url: "../img/keep/keep3.jpg",
        title: "LALALALA",
        text: "Fullstack Me Baby!",
      }
    },
    {
      type: "7",
      type: "noteTodos",
      isPinned: true,
      style: { backgroundColor: "#00d" },
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
