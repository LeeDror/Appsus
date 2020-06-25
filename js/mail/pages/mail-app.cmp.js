
import { mailService } from "../services/mail.service.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailContent from "../cmps/mail-content.cmp.js";
import composeMail from "../cmps/compose-mail.cmp.js";
import mailSearch from "../cmps/mail-search.cmp.js";
import mailSort from "../cmps/mail-sort.cmp.js";
import mailSentItems from "../cmps/mail-sent-items.cmp.js";


//<book-details class = "modal-content" @close="selectBook" v-if="selectedBook" :book="selectedBook"/>
//<book-list @selected="selectBook" v-else v-bind:books="booksToShow"></book-list> 



export default {
    name: 'app',
    template: `
        <main class="mail-app">
        <mail-sort @sort="setSort"/>
        <mail-search @search="setSearch"/>
        <section flex app>
            <compose-mail @sent="loadMsgs"/> 
            <mail-sent-items @selected ="selectMsg" :sentItems="sentMsgs"></mail-sent-items>
            <mail-content @close="toggleIsRead" v-if="selectedMsg" :msgItem="selectedMsg"/>
            <mail-list @selected="selectMsg" v-else v-bind:msgItems="msgsToShow"></mail-list> 
        </section>

        </main> 
    `,
    data() {
        return {
            msgItems: [],
            selectedMsg: null,
            searchBy: null,
            sortBy: null,
            sentMsgs:null
        };
    },
    computed: {
        msgsToShow() {
            if (this.searchBy) {
                const searchBy = this.searchBy;
                if (!searchBy) return this.msgItems
                var searchedMsgs = this.msgItems.filter((msg) => {

                    if (

                        msg.subject.includes(searchBy.bySubject) &&
                        msg.text.includes(searchBy.byTxt) &&
                        msg.from.includes(searchBy.byFrom)

                    ) {
                        return msg;
                    }
                });
                if (this.sortBy) {
                    console.log(sortBy)
                    switch (this.sortBy) {
                        case 'Subject':
                            return searchedMsgs.sort((a, b) => b.subject - a.subject)

                            break;
                        case 'recivedAt':
                            return searchedMsgs.sort((a, b) => b.recivedAt - a.recivedAt)

                            break;
                        default:
                            return searchedMsgs
                    }
                }
                else {
                    return searchedMsgs
                }

            }
            else {
                return this.msgItems
            }

        },
        hasItems() {
            return this.msgItems && this.msgItems > 0;
        },
    },
    methods: {

        loadSentMsgs() {

            console.log('loaded')

            var ret = this.msgItems.filter((msg) => { msg.sent === true })
            console.log('ret ', ret)

        },

        loadMsgs() {
            this.msgItems = mailService.getMsgs()

        },

        selectMsg(msg) {

            this.selectedMsg = msg;
            console.log(msg)
            return msg
        },
        toggleIsRead(msg) {
            msg.isRead = !msg.isRead
            this.selectMsg()
            console.log('read ', msg)
        },
        setSearch(searchBy) {
            this.searchBy = searchBy
        },
        setSort(sortBy) {
            this.sortBy = sortBy;
            console.log(' emit', sortBy)
        },
    },

    created() {


        this.msgItems = mailService.getMsgs()

        // .then((items) => (this.msgItems = items));

    },
    components: {
        mailList, mailContent, composeMail, mailSearch
        , mailSort, mailSentItems
    }
};