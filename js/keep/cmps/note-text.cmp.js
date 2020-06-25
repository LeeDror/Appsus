export default {
  props: ['note'],
  template: `
    <section>
        <input type="text" v-model="note.info.title" @blur="reportVal"/>
        <input type="text" v-model="note.info.text" @blur="reportVal"/>
    </section>
    `,
    methods: {
      reportVal() {
        this.$emit('setVal', this.note)
      }
    }
};

