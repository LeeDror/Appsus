import mailReply from './mail-reply.cmp.js';

export default {
    name:'content',
    props: ['msgItem'],
    template: `
          <section class="mail-content content">
              <button @click="close">X</button>
              {{msgItem.from}}
              {{msgItem.cc}}
              {{msgItem.subject}}
              {{msgItem.text}}
              {{msgItem.styles.fontFam}}
              {{msgItem.styles.fontSize}}
              {{msgItem.styles.txtColor}}
              {{msgItem.styles.bgColor}}
              {{msgItem.recivedAt}}           
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


  