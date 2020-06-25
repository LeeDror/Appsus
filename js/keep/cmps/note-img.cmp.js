export default {
    props: ['note'],
    template: `
    <section>
        <img :src="note.info.url"/>
    </section>
    `,
    methods: {
      reportVal() {
        this.$emit('setVal', this.note)
      }
    }
}

