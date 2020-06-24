import { mailService } from "../services/mail.service.js";


export default {
    template: `
    <section class="compose-mail">
    <button v-on:click="isHidden = !isHidden">Compose Mail</button>
     <div v-if="!isHidden">
       <button @click="close">X</button>
        <form class="review" @submit.prevent="sendMail">  
            <input type="text" ref="textInput" placeholder="to:" v-model="msgToEdit.to"/>         
            <input type="text" placeholder="cc:" v-model="msgToEdit.cc"/>
            <textarea v-model="msgToEdit.freeText" placeholder="your message here..."></textarea>
            <button>Send!</button>
        </form>
      </div>
    </section>
    `,
    data() {
        return {
            msgToEdit: {
                to: "",
                cc: "",
                sentAt: this.formattedDate,
                freeText: "",
            },
            isHidden:true
        };
    },
    methods: {
        close() {
            this.clearMsgForm()
            this.isHidden=true
            this.$emit('close', null);
        },
        toggleHidden(){
            isHidden = !isHidden
        },
        sendMail() {
            mailService.addSentMail(this.msgToEdit);
            console.log('sent!')
            this.clearMsgForm()
            close();
            // eventBus.$emit('user-msg', `review was added successfully`);
        },
        clearMsgForm(){
            this.msgToEdit.to=""
            this.msgToEdit.cc=""
            this.msgToEdit.sentAt=""
            this.msgToEdit.freeText=""            
        }

    },
        computed: {
            formattedDate() {
                new Date().toISOString().substring(0, 10);
            },
        },
        mounted() {
            // this.$refs.textInput.focus();
            

        },
    }