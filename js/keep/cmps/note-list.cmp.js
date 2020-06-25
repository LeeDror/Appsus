
import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import color from '../cmps/color.cmp.js';

import { keepService } from "../services/keep.service.js";

export default {
  props: ['notes'],
  template: `
        <section class="note-list">
            <div class="note-preview" v-for="(note, idx) in notes" :style="note.style">
                <component :is="note.type" :note="note" @setVal="setNote($event, idx)"></component>
                <input type="color" v-model="note.style.backgroundColor" id="bgColor" @click.stop>
                <span :class="{pined: note.isPined}" @click="note.isPined=!note.isPined"><i class="fas fa-thumbtack" ></i></span>
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
    setNote (note) {
      keepService.saveEditNote(note)
        .then(notes => this.editNotes = notes)
    }
  },
  components: {
    noteText,
    noteImg,
    noteTodos,
    noteVideo,
    color
  },
};
