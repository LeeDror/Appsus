import { mailService } from "../services/mail.service.js";

//<input type="checkbox" v-model="msgItem.isRead"  @click.prevernt='click':checked='msgItem.isRead'/>
// import mailContent from './mail-content.cmp.js';
// submit.prevent="onSubmit"

export default {
  name:'item',
  props: ['msgItem'],
  template: `
  <section class = "mail-item row" >
  
          <tr class="mail-item row" v-bind:class="{unread:!msgItem.isRead}">
          <input type="checkbox" :checked ='msgItem.isRead' v-on:click.stop="toggleIsRead" /> 
            <td>{{msgItem.from}}</td>
            <td>{{msgItem.subject}}</td>
            <td>{{msgItem.recivedAt}}</td>
   
    
          </tr>
          </section>  
      `,
      // data() {
      //   return {
      //       isRead:this.msgItem.isRead
      //   };
    //},
  methods: {

    toggleIsRead(){
      this.msgItem.isRead =!this.msgItem.isRead
    }

  },
  components: {
    // mailContent
  },
};

{/* <input type="checkbox" v-model="msgItem.isRead"  @click='$event.stopPropagation()':checked='msgItem.isRead'/> */}

  // <book-details class = "modal-content" @close="selectBook" v-if="selectedBook" :book="selectedBook"/>
  //<mail-content class = "modal-content"/>   
  // <mail-content class = "modal-content" @close="selectBook" v-if="selectedBook" :book="selectedBook"/>  


  // <li class="mail-item">
  // {{msgItem.from}}
  // {{msgItem.subject}}
  // {{msgItem.recivedAt}}

  // </li>