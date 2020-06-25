export default {
  props: ['note'],
  template: `
    <section>
        <ul v-for="todo in note.info.todos">
          <li><input :class="{done:todo.doneAt}" type="text" v-model="todo.text" @blur="reportVal"/></li>
          <input type="checkbox" />
        </ul>
    </section>
    `,
    methods: {
      reportVal() {
        this.$emit('setVal', this.note)
      }
    },
    todoDone() {
      if (this.todo.doneAt) this.todo.doneAt=null;
      this.todo.doneAt = date.now();
    }
};


// @click="todoDone"

