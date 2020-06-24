


import notePreview from './note-preview.cmp.js';
/* <div v-for="(note, idx) in notes"></div>
<component :is="note.type" :info="note.info"></component>
</div> */
// import noteText from '../cmps/note-text.cmp.js'
// import noteImg from '../cmps/note-img.cmp.js'
// import noteTodos from '../cmps/note-todos.cmp.js'
// import noteVideo from '../cmps/note-video.cmp.js'

export default {
  props: ['notes'],
  template: `
        <ul class="note-list clean-list">
            <note-preview v-for="note in notes" :note="note" :key="note.id"/>      
        </ul>
    `,
  methods: {
    selectBook(note) {
      this.$emit("selected", note);
    }
  },
  components: {
    notePreview
  }
};
