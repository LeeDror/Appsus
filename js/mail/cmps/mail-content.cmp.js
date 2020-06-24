export default {
    props: ['msgItem'],
    template: `
          <li class="mail-item">
              <button @click="close">X</button>
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
        close() {

            this.$emit('close', null);
        }
    },
  };