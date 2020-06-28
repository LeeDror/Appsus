import mailReply from './mail-reply.cmp.js';

export default {
    name:'content',
    props: ['msgItem'],
    template: `
          <section class="mail-content content flex-column align-start space-between">
              <button @click="close">X</button>
              <div>&nbsp&nbsp&nbspform: {{msgItem.from}}</div>
              <div>&nbsp&nbsp&nbspcc: {{msgItem.cc}}</div>
              <div>&nbsp&nbsp&nbspsubject: {{msgItem.subject}}</div>
              <div>&nbsp&nbsp&nbspmessage: {{msgItem.text}}</div>
              <div>&nbsp&nbsp&nbspreceived at: {{msgItem.recivedAt}}</div>

              <button class="btnrply" v-on:click="isHidden = !isHidden">reply</button>     
              <div v-if="!isHidden">  
                <mail-reply :msg="msgItem" @close="close"/>
             </div>
          </section>
      `,
      data() {
        return {

            isHidden:true
        }},
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


  