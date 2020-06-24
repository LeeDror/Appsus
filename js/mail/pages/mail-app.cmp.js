
import { mailService } from "../services/mail.service.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailContent from "../cmps/mail-content.cmp.js";
import composeMail from "../cmps/compose-mail.cmp.js";


//<book-details class = "modal-content" @close="selectBook" v-if="selectedBook" :book="selectedBook"/>
//<book-list @selected="selectBook" v-else v-bind:books="booksToShow"></book-list> 



export default {
    template: `
        <main class="mail-app">
            <compose-mail/> 
            <mail-content @close="selectMsg" v-if="selectedMsg" :msgItem="selectedMsg"/>
            <mail-list @selected="selectMsg" v-else v-bind:msgItems="msgsToShow"></mail-list> 

        </main> 
    `,
    data() {
        return {
            msgItems: [],
            selectedMsg: null,
        };
    },
    computed: {
        msgsToShow() {

            return this.msgItems
        },
        hasItems() {
            return this.msgItems && this.msgItems > 0;
        },
    },
    methods: {
        selectMsg(msg) {

            this.selectedMsg = msg;
            console.log(msg)
            return msg
        }
    },
    // methods: {
    //     setFilter(filterBy) {
    //         this.filterBy = filterBy;
    //     },
    // },
    created() {
 
        console.log('created')
        this.msgItems =mailService.getMsgs()
    
            // .then((items) => (this.msgItems = items));
            console.log('msgitems ',this.msgItems)
    },
    components: {
        mailList, mailContent,composeMail
    }
};