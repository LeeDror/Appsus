
import {keepService} from '../services/keep.service.js';

export default {
  props: ['note'],
  template: `
    <section>
        <input type="text" v-model="noteToEdit.info.title"/>
        <input type="text" v-model="noteToEdit.info.text"/>
        <input type="color" v-model="noteToEdit.info.text"/>
        <button :disabled="!isValid">Close</button>
    </section>
    `,
    data() {
      return {
        noteToEdit: {
          type: '',
          isPinned: false,
          style: { backgroundColor: '' },
          info: {
            url: '../img/keep/keep3.jpg',
            title: '',
            text: '',
          }
        }
      }
    },
    computed: {
      isValid() {
          return (this.noteToEdit.title);
      }
    },
    created() {
      const noteId = this.$route.params.noteId;
      if (noteId) {
        keepService.getNoteById(noteId)
              .then(note => {
                  this.noteToEdit = {...note};
              })
    }
  } 
};
