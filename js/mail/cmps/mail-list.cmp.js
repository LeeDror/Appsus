import mailItem from './mail-item.cmp.js';

export default {
  template: `
        <ul class="mail-list">
            <mail-item v-for="msgItem in msgItems" @click.native="selectBook(msgItem)" :msgItem="msgItem" :key="msgItem.id"/>         
        </ul>
    `,
  methods: {
    getMsg(item) {
      this.$emit('selected', item);     
    },
  },
  components: {
    mailItem
  }
}