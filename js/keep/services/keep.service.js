export const keepService = {
  getNotes,
  getNoteById,
  addNote,
};

var gNotes = createNotes();

function addNote(note) {
  gBooks.unshift(newNote);
}

function getNotes() {
  console.log(gNotes);
  return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
  const note = gNotes.find((note) => note.id === noteId);
  return Promise.resolve(note);
}

function createNotes() {
  return [
    { 
      type: "noteText", 
      isPinned: true, 
      info: { 
        title: "Me playing Mi11111", 
        text: "Fullstack Me Baby!" 
      } 
    },
    {
      type: "noteImg",
      info: { 
        url: '../img/keep/keep4.jpg', 
        title: "Me playing Mi2222",
        text: "Fullstack Me Baby!"
      },
      style: { backgroundColor: "#00d" },
    },
    {
      type: "noteImg",
      info: { 
        url: '../img/keep/keep3.jpg', 
        title: "LALALALA",
        text: "Fullstack Me Baby!"
      },
      style: { backgroundColor: "#00d" },
    },
    {
      type: "noteImg",
      info: { 
        url: '../img/keep/keep3.jpg', 
        title: "LALALALA",
        text: "Fullstack Me Baby!"
      },
      style: { backgroundColor: "#00d" },
    },
    {
      type: "noteImg",
      info: { 
        url: '../img/keep/keep3.jpg', 
        title: "LALALALA",
        text: "Fullstack Me Baby!"
      },
      style: { backgroundColor: "#00d" },
    },
    {
      type: "noteTodos",
      info: {
        title: "How was it:",
        todos: [
          { text: "Do that", 
            doneAt: null 
          },
          { text: "Do this", 
            doneAt: 187111111 
          },
        ],
      },
    },
  ];
}
