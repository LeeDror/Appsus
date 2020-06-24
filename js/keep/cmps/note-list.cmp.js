// import notePreview from './note-preview.cmp.js';
/* <note-preview v-for="note in notes" :note="note" :key="note.id"/>  */

import noteText from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';

export default {
  props: ['notes'],
  template: `
        <section class="note-list">
            <div class="note-preview" v-for="(note, idx) in notes">
                <component :is="note.type" :info="note.info"></component>
            </div>
        </section>
    `,
  components: {
    noteText,
    noteImg,
    noteTodos,
    noteVideo,
  },
};
