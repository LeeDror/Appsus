//<div v-if="!isHidden" class="new-mail">

import { mailService } from "../services/mail.service.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailContent from "../cmps/mail-content.cmp.js";
import composeMail from "../cmps/compose-mail.cmp.js";
import mailSearch from "../cmps/mail-search.cmp.js";
import mailSort from "../cmps/mail-sort.cmp.js";
import mailSentItems from "../cmps/mail-sent-items.cmp.js";
//<section class="screen-inbox flex">
//<section class="side-inbox flex-column space-around">
export default {
    name: 'app',
    template: `
        <main class="mail-app">

        <section class="nav-inbox flex space-around align-center justify-center"> 
          <div class="readCount">read: {{getReadCount}}</div>
          <mail-sort class="flex align-center justify-center space-arount" @sort="setSort"/>
          <mail-search @search="setSearch"/>
        </section> 
        
    <section class="screen-inbox">

          <section class="side-inbox">
             <button class="special-btn compose" v-on:click="isHidden = !isHidden">Compose Mail</button>                     
             <compose-mail  v-if="!isHidden" class="new-mail" @sent="loadMsgs" @close="isHidden = !isHidden"/>  
             <mail-sent-items @selected ="selectMsg" :sentItems="loadSentMsgs"></mail-sent-items>
            <mail-content @close="toggleIsRead" v-if="selectedMsg" :msgItem="selectedMsg"/>          
            <mail-list @selected="selectMsg" v-else v-bind:msgItems="msgsToShow"></mail-list> 
       </section>

    </section>
        
        

        </main> 
    `,
    data() {
        return {
            msgItems: [],
            selectedMsg: null,
            searchBy: null,
            sortBy: null,
            sentMsgs: null,
            isHidden:true
        }
        
    },
    computed: {
        getReadCount() {

            var readMsgs = this.msgItems.filter((msg) => {

                if (

                    msg.isRead === true

                ) {
                    return msg;
                }
            });
            return (readMsgs.length)
  
        },
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

        loadSentMsgs() {

            var searchedMsgs = this.msgItems.filter((msg) => {

                if (

                    msg.sent === true

                ) {
                    return msg;
                }
            });

            console.log(' serched', searchedMsgs)
            this.sentMsgs = searchedMsgs
            return searchedMsgs

        },
    },
    methods: {


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
        emptySent() {
            this.sentMsgs = ''
        }
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