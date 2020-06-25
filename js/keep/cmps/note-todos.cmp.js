export default {
  props: ['note'],
  template: `
    <section>
        <ul v-for="(todo,idx) in note.info.todos" class="clean-list">
          <li><input :class="{done:todo.doneAt}" type="text" v-model="todo.text" @blur="reportVal"/>
          <input type="checkbox" @click="todoDone(todo)" v-model="todo.doneAt"/>
          </li>
        </ul>
    </section>
    `,
    methods: {
      reportVal() {
        console.log(this.note.info.todos);
        this.$emit('setVal', this.note)
        
      },
    todoDone(todo) {
      if (todo.doneAt>0) todo.doneAt=null;
      else todo.doneAt = Date.now();
      this.reportVal();
    }
  }
};