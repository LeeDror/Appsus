export default {
    props: ['note'],
    template: `
    <section>
        {{note.info.url}}

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
    },
    created() {
      console.log(this.note);
      
    }
}

