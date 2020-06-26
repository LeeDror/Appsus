import mailItem from './mail-item.cmp.js';

export default {
  name: 'sent',
  props: ['sentItems'],
  template: `
    <section class="sent-items">
    <button  @click="isHidden = !isHidden" class="special-btn sent-list">Sent Items</button>
    
        <div v-if="!isHidden">
        <button v-on:click="isHidden = !isHidden">back to inbox</button> 
        <section class="sent-div">
           <table class="sent-table mail-list tbl clean-list">
              <section v-for="msgItem in sentItems">        
                 <mail-item @click.native="selectMsg(msgItem)" :msgItem="msgItem" :key="msgItem.id"></mail-item>          
              </section>    
           </table>
           </section>
         </div>
    </section>
    `,
  data() {
    return {

      isHidden: true
      
    }
  },
  mathods: {
    toggleHidden(){
      this.isHidden =!this.isHidden
    }
    //  computed:{
    //   open() {
    //     //   // this.clearMsgForm()
    //        this.isHidden = false
    //  }
  },
    components: {
        mailItem
    }
};

