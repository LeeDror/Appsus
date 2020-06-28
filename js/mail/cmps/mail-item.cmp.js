import { mailService } from "../services/mail.service.js";

//<i  v-on:click.stop="toggleIsRead" ></i>
//<input type="checkbox" :checked ='msgItem.isRead' v-on:click.stop="toggleIsRead" v-bind:class="{fa fa-envelope:!msgItem.isRead}" /> 




//<input type="checkbox" v-model="msgItem.isRead"  @click.prevernt='click':checked='msgItem.isRead'/>
// import mailContent from './mail-content.cmp.js';
// submit.prevent="onSubmit"

//<h4 v-if="shouldShowScore" v-bind:class="scoreClass"></h4>

//class="[faClass(tab.icon)]"

export default {
  name:'item',
  props: ['msgItem'],
  template: `
  <section class = "mail-item row" >
  
          <tr class="mail-item row" v-bind:class="{unread:!msgItem.isRead}">
          <span v-if="msgItem.isRead"><i class="fa fa-envelope-open" @click.stop="toggleIsRead">&nbsp&nbsp&nbsp</i></span>
          <span v-else><i  class="fa fa-envelope" @click.stop="toggleIsRead">&nbsp&nbsp&nbsp</i></span>
          
         
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

    }, 
      faClass() {
        // return (isRead)? `fa fa-envelope-open` :`fa fa-envelope`

        `fa fa-envelope`
        
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