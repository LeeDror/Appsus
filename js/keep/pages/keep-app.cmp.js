
import noteList from "../cmps/note-list.cmp.js";
import noteAdd from "../cmps/note-add.cmp.js";
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
      return filteredNotes.sort(function(x, y) {return (x.isPinned === y.isPinned)? 0 : x.isPinned? -1 : 1;})
  }},
  methods: {
    renderNotes() {
        keepService.getNotes().then((notes) => {
            //  this.notesToShow();
            //  console.log(notes);
             
            return this.notes = notes
        })
    }
  },
  components: {
    noteList,
    noteAdd
  },
}
