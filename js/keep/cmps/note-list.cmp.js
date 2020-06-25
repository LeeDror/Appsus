
import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import color from '../cmps/color.cmp.js';
// <input type="color" v-model="note.style.backgroundColor" id="bgColor" @click.stop>
import { keepService } from "../services/keep.service.js";

export default {
  props: ['notes'],
  template: `
        <section class="note-list">
            <div class="note-preview" v-for="(note, idx) in notes" :style="note.style">
                <component :is="note.type" :note="note" @setVal="setNote($event, idx)"></component>
                <i class="fas fa-palette" @click="showColor=!showColor"></i>
                <color v-if="showColor" :note="note" @setVal="setNote($event, idx)"> </color>      
                <i :class="{unpinned: !note.isPinned}" @click.stop="note.isPinned=!note.isPinned ,setNote(note)" class="fas fa-thumbtack" ></i>
                </button>
            </div>
        </section>
    `,
  data() {
    return {
      editNotes: [],
      showColor: false
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
