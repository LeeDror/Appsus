export default {
  template: `
        <div class="user-msg">
            <h2>ddddd</h2>
            <h2>{{this.message.type}}</h2>
            <h4>{{this.message.txt}}</h4>
        </div>
      `,
  data() {
    return {
      message: {
        type:'success',
        txt: null,
      },
    };
  },
};
