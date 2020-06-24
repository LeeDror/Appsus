export default {
    props: ['msgItem'],
    template: `
          <li class="mail-item">
              <amil-content class = "modal-content" @close="selectBook" v-if="selectedBook" :book="selectedBook"/>             
              {{msgItem.to}}
              {{msgItem.cc}}
              {{msgItem.text}}
              {{msgItem.styles.fontFam}}
              {{msgItem.styles.fontSize}}
              {{msgItem.styles.txtColor}}
              {{msgItem.styles.bgColor}}
              {{msgItem.sentAt}}
          </li>
      `,
      methods: {

    },
  };