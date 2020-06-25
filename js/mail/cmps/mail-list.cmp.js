{/* <input type="checkbox" :checked='msgItem.isRead' @click='$event.stopPropagation()'/> */}
//v-for="msgItem in msgItems" 

import mailItem from './mail-item.cmp.js';

export default {
    name:'list',
    props: ['msgItems'],
    template: `
    <table class="mail-list tbl clean-list">
    <section v-for="msgItem in msgItems"> 
    
    <mail-item @click.native="selectMsg(msgItem)" :msgItem="msgItem" :key="msgItem.id"></mail-item> 
      
    </section>    
  </table>
    `,
    methods: {
        selectMsg(item) {

            console.log('item ', item)
            this.$emit('selected', item);
        },

    },
    components: {
        mailItem
    },
    created() {
        console.log('items: ', this.msgsItems)

    },
    components: {
        mailItem
    }

}
// class="mail-list tbl clean-list"

//  <mail-item v-for="msgItem in msgItems" @click.native="selectMsg(msgItem)" :msgItem="msgItem" :key="msgItem.id"></mail-item>        
 
// <ul class="mail-list clean-list">
// <mail-item v-for="msgItem in msgItems" @click.native="selectMsg(msgItem)" :msgItem="msgItem" :key="msgItem.id"/>         
// </ul>

{/* <mail-item v-for="msgItem in msgItems" @click.native="selectBook(msgItem)" :msgItem="msgItem" :key="msgItem.id"/>  */ }