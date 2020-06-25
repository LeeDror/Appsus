export default {
  props: ['info'],
  template: `
    <section>
      <input type="text" v-model="info.title"/>
        <ul v-for="todo in info.todos" @blur="reportVal">
          <li :class="{done:todo.doneAt}"><input type="text" v-model="todo.text"/></li>
        </ul>
    </section>
    `,
    data() {
      return {
        val: '',
      }
    },
    methods: {
      reportVal() {
        this.$emit('setVal', this.val)
      }
    }
};


