export default {
  props: ['note'],
  template: `
    <section class="note-preview">
        <div v-if="note.info.title">{{note.info.title}}</div>
        <div v-if="note.info.text">{{note.info.text}}</div>
        <div v-if="note.info.url"><img :src="note.info.url"/></div> 
        <div v-if="note.todos"><img :src="note.info.url"/></div> 
    </section>
    `,
    data() {
        return {
            // note: null
        }
    },
    created() {
        // console.log('note-preview', this.note);
        // this.note = note;
    }
};
