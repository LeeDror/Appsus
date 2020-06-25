// import mailContent from './mail-content.cmp.js';
// submit.prevent="onSubmit"
export default {
  props: ['msgItem'],
  template: `
          <tr class="mail-item row" v-bind:class="{unread:!isRead}">
          <input type="checkbox" v-model="msgItem.isRead"  @click.prevernt='click':checked='msgItem.isRead'/>
            <td>{{msgItem.from}}</td>
            <td>{{msgItem.subject}}</td>
            <td>{{msgItem.recivedAt}}</td>
    
          </tr>
      `,
      data() {
        return {
            isRead:this.msgItem.isRead
        };
    },
  methods: {

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