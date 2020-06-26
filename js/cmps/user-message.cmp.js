
import { eventBus } from '../services/event-bus.service.js'

export default {
    name: 'usrMsg',
    template: `
          <section v-if="msg" class="user-message flex align-center justify-center">
          {{msg}}
          </section>
      `,
    data() {
        return {
            msg: ''
        }
    },
  created() {
    eventBus.$on('usr-msg',msg =>{
        this.msg=msg;
        setTimeout(()=> this.msg='',3000)
    })
  }
}