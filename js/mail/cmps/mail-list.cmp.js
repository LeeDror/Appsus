import mailItem from './mail-item.cmp.js';

export default {
    props: ['msgItems'],
    template: `
        <ul class="mail-list clean-list">
            <mail-item v-for="msgItem in msgItems" @click.native="selectMsg(msgItem)" :msgItem="msgItem" :key="msgItem.id"/>         
        </ul>
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


{/* <mail-item v-for="msgItem in msgItems" @click.native="selectBook(msgItem)" :msgItem="msgItem" :key="msgItem.id"/>  */ }