//  <note-list :notes="notesToShow"> </note-list>
import noteList from "../cmps/note-list.cmp.js";
import noteAdd from "../cmps/note-add.cmp.js";
// import noteEdit from "../cmps/note-edit.cmp.js";
// import noteText from '../cmps/note-text.cmp.js'
// import noteImg from '../cmps/note-img.cmp.js'
// import noteTodos from '../cmps/note-todos.cmp.js'
// import noteVideo from '../cmps/note-video.cmp.js'
//   // <router-link to="/edit
import { keepService } from "../services/keep.service.js";

export default {
  template: `
        <section class="keep-app">
            <input class="note-search" type="text" placeholder="Search in title" v-model="filter">
            <note-add @addedNote="renderNotes($event)"></note-add>
            <note-list :notes="notesToShow"></note-list>
        </section>
    `,
  data() {
    return {
      notes: [],
      filter: null,
      showEdit: false
    };
  },
  created() {
    keepService.getNotes().then((notes) => {
      return (this.notes = notes);
    });
  },
  computed: {
    notesToShow() {
      const filter = this.filter;
      if (!filter) return this.notes;
      let filteredNotes = this.notes.filter((note) => {
        return note.info.title.toLowerCase().includes(filter.toLowerCase());
      });
      return filteredNotes.sort((a, b) => a.isPinned - b.isPinned);
    },
  },
  methods: {
    renderNotes(event) {
        keepService.getNotes().then((notes) => 
            this.notes = notes)
    }
  },
  components: {
    noteList,
    noteAdd
  },
};
