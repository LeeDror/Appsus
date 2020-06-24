// import mailContent from './mail-content.cmp.js';

export default {
    props: ['msgItem'],
    template: `
          <li class="mail-item">
          {{msgItem.from}}
          {{msgItem.subject}}
          {{msgItem.recivedAt}}
    
          </li>
      `,
      methods: {

    },
    components: {
      // mailContent
    },
  };

  // <book-details class = "modal-content" @close="selectBook" v-if="selectedBook" :book="selectedBook"/>
  //<mail-content class = "modal-content"/>   
  // <mail-content class = "modal-content" @close="selectBook" v-if="selectedBook" :book="selectedBook"/>   