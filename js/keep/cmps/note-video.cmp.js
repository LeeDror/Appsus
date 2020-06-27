export default {
    props: ['note'],
    template: `
    <section>
        <input class="note-title" type="text" v-model="note.info.title" @blur="reportVal"/>
        <hr>
        <iframe height="100%"
          :src="note.info.url">
        </iframe>
    </section>
    `,
    methods: {
      reportVal() {
        this.$emit('setVal', this.note)
      }
    }
}

