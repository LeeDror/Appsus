import { mailService } from "../services/mail.service.js";


export default {   
    name:'reply',
    props: ['msg'],
    template: `
    <section class="mail-reply flex-row align-center">
    <button class="btnrply" v-on:click="isHidden = !isHidden">reply</button>
     <div v-if="!isHidden">
     <button @click="close">X</button>
        <form class="newmsg" @submit.prevent="sendMail">  
            <input type="text" ref="textInput" placeholder="to:" v-model="msgToEdit.to"/>   
            <input type="text" ref="textInput" placeholder="from:" v-model="msgToEdit.from"/>        
            <input type="text" placeholder="cc:" v-model="msgToEdit.cc"/>
            <input type="text" placeholder="subject:" v-model="msgToEdit.subject"/>
            <textarea v-model="msgToEdit.freeText" placeholder="your message here..."></textarea>
            <button>Send!</button>
        </form>
        
      </div>
    </section>
    `,
    data() {
        return {
            msgToEdit: {
                to: this.msg.from,
                cc: "",
                from:'me',
                sentAt: this.formattedDate,
                subject:"",
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
            if(this.msgToEdit.to==='me'){
                mailService.addIncomeMsg(this.msgToEdit);
            }
            else{
                mailService.addSentMail(this.msgToEdit);
            }
            
            // console.log('sent!')
            // this.clearMsgForm()
            // close()
            // this.$emit('sent',null);
            this.close()
        
            // eventBus.$emit('user-msg', `review was added successfully`);
        },
        clearMsgForm(){
            this.msgToEdit.to=""
            this.msgToEdit.cc=""
            this.msgToEdit.sentAt=""
            this.msgToEdit.freeText=""  
            this.msgToEdit.subject="" 
            this.msgToEdit.from=""         
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
