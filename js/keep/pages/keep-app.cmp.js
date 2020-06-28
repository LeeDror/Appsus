import noteList from "../cmps/note-list.cmp.js";
import noteAdd from "../cmps/note-add.cmp.js";
import { keepService } from "../services/keep.service.js";

export default {
  template: `
        <section class="keep-app">
            <input class="note-search" type="text" placeholder="Search in title" v-model="filter">
            <note-add @addedNote="renderNotes"></note-add>
            <note-list v-if="notes" :notes="notesToShow" @remove="removeNote" @edit="saveEditNote" @send=""></note-list>
        </section>
    `,
  data() {
    return {
      notes: [],
      filter: null,
      showEdit: false,
    };
  },
  created() {
    keepService.getNotes().then((notes) => {
      this.notes = notes
    });
  },
  computed: {
    notesToShow() {
      const filter = this.filter;
      if (!filter) return this.notes;
      let filteredNotes = this.notes.filter((note) => {
        return note.info.title.toLowerCase().includes(filter.toLowerCase());
      });
      return filteredNotes.sort(function (x, y) {
        return x.isPinned === y.isPinned ? 0 : x.isPinned ? -1 : 1;
      });
    },
  },
  methods: {
    renderNotes(noteType, content) {
      keepService.addNote(noteType, content);
      keepService.getNotes().then((notes) => (this.notes = notes));
    },
    removeNote(note) {
      keepService.removeNote(note).then((notes) => (this.notes = notes));
    },
    saveEditNote(note) {
      keepService.saveEditNote(note).then((notes) => (this.notes = notes));
    },
  },
  components: {
    noteList,
    noteAdd,
  },
};
