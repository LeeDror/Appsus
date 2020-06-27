import noteText from "../cmps/note-text.cmp.js";
import noteImg from "../cmps/note-img.cmp.js";
import noteTodos from "../cmps/note-todos.cmp.js";
import noteVideo from "../cmps/note-video.cmp.js";
import color from "../cmps/color.cmp.js";
//v-show="showBar
export default {
  props: ["notes"],
  template: `
        <section class="note-list">
            <div class="note-preview" v-for="(note, idx) in notes" :style="note.style" >
                <component :is="note.type" :note="note" @setVal="setNote($event, idx)" @mouseover.native="showBtnBar(note.id)" @mouseout.native="showBtnBar(note.id)"></component>
                <div class="showBar" :class="{hide: !showBar}" v-show="currNote===note.id">
                  <i class="fas fa-palette" @click="showColor=!showColor"></i>
                  <color v-if="showColor" :note="note" @setVal="setNote($event, idx)"> </color>      
                  <i :class="{unpinned: !note.isPinned}" @click.stop="note.isPinned=!note.isPinned" @click="setNote(note)" class="fas fa-thumbtack" ></i>
                  <i class="fas fa-trash-alt" @click="removeNote(note)"></i>
                  <i class="fas fa-envelope-square" @click="sendMail(note)"></i>
                </div>
            </div>
        </section>
    `,
  data() {
    return {
      showColor: false,
      showBar: false,
      currNote: null,
    };
  },
  methods: {
    setNote(note) {
      this.$emit("edit", note);
      this.showColor=false;
    },
    removeNote(note) {
      this.$emit("remove", note);
    },
    sendMail(note) {
      this.$emit("send", note);
    },
    showBtnBar(noteId) {
      this.currNote = noteId;
      if (this.showBar) this.showBar = false;
      else this.showBar = true;
    },
  },
  components: {
    noteText,
    noteImg,
    noteTodos,
    noteVideo,
    color,
  },
};
