export default {
  name: 'sent',
  props: ['sentItems'],
  template: `
    <section class="sent-items">
    <button class="special-btn sent-list" v-on:click="isHidden = !isHidden">Sent Items</button>
     <div v-if="!isHidden">
       <button v-on:click="isHidden = !isHidden">back to inbox</button>
       <table class="mail-list tbl clean-list">
       <section v-for="msgItem in sentItems">        
       <mail-item @click.native="selectMsg(msgItem)" :msgItem="msgItem" :key="msgItem.id"></mail-item>          
       </section>    
     </table>

      </div>
    </section>
    `,
  data() {
    return {

      isHidden: true
    };
  },
  mathods: {
    // close() {
    //   // this.clearMsgForm()
    //   this.isHidden = true
    //   // this.$emit('close', null);
    // }
  }
}

