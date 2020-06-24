export default {
  props: ['info'],
  template: `
    <section>
        {{info.title}}
        <ul v-for="todo in info.todos" >
          <li>{{todo.text}}</li>
        </ul>
    </section>
    `,
};

//v-if="todo.doneAt"
