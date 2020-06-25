export default {
    props: ['note'],
    template: `
    <section>
        <input class="note-title" type="text" v-model="note.info.title" @blur="reportVal"/>
        <hr>
        <video>
            <source src="note.info.url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
    `,
    methods: {
      reportVal() {
        this.$emit('setVal', this.note)
      }
    }
}

