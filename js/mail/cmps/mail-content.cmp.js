import mailReply from './mail-reply.cmp.js';

export default {
    name:'content',
    props: ['msgItem'],
    template: `
          <section class="mail-content content flex-column align-start space-between">
              <button @click="close">X</button>
              <div>form: {{msgItem.from}}</div>
              <div>cc: {{msgItem.cc}}</div>
              <div>subject: {{msgItem.subject}}</div>
              <div>message: {{msgItem.text}}</div>
              <div>received at: {{msgItem.recivedAt}}</div>          
              <mail-reply :msg="msgItem" @close="close"/>
          </section>
      `,
      methods: {
        close() {

            this.$emit('close', this.msgItem);
        },
        openRplyForm(){
            
        }
    },
    components: {
        mailReply
    }
  };


  