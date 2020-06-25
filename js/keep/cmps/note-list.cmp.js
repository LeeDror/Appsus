
import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';

import { keepService } from "../services/keep.service.js";

export default {
  props: ['notes'],
  template: `
        <section class="note-list">
            <div class="note-preview" v-for="(note, idx) in notes">
                <component :is="note.type" :info="note.info" @setVal="setNote($event, idx)"></component>
            </div>
        </section>
    `,
  data() {
    return {
      editNotes: []
    }
  },
  created() {
    keepService.getNotes()
      .then (notes => this.editNotes = notes)
  },
  methods: {
    setNote (note,idx) {
      this.editNotes.splice(idx,1,note);
      keepService.saveNotes(editNotes)
        .then(notes => this.editNotes = notes)
    }    
  },
  components: {
    noteText,
    noteImg,
    noteTodos,
    noteVideo
  },
};
