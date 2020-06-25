
import { keepService } from "../services/keep.service.js";

export default {
    template: `
    <section>
        <div class="keep-content">
            <div class="new-note">    
                <input type="text" :placeholder="changePlaceHolder()" @click="onShowAdd()" v-model="newNote.info.title">                    
                <input type="text" placeholder="Text..." v-if="showAdd" v-model="newNote.info.text">                 
                <input type="text" placeholder="first item.." v-if="addList()">                 
                <i class="fas fa-font" @click="setType('noteText')"></i>&nbsp;
                <i class="fas fa-image" @click="setType('noteImg')"></i>&nbsp;
                <i class="fab fa-youtube" @click="setType('noteVideo')"></i>&nbsp;
                <i class="fas fa-list-ul" @click="setType('noteTodos')"></i>
                <button v-if="showAdd" @click="saveNote">Close</button>
            </div> 
        </div> 
    </section>
    `,
    data() {
        return {
            newNote: {info: {title:'', text:''}},
            showAdd: false,
            noteType: null
        }
    },
    methods: {
        setType(type) {
            this.noteType = type;
            this.newNote.type = type;
            if (type='noteTodos') this.newNote.info.todos = [];
            else if (type='noteImg') this.newNote.info.url = '';
            else if (type='noteVideo') this.newNote.info.url = '';
            this.showAdd = true;  
        },
        onShowAdd() {
            this.showAdd = true;
            this.noteType = 'noteText';
        },
        saveNote() {
            keepService.addNote(this.newNote);
            this.$emit('addedNote', this.newNote)
            keepService.getNewNote().then(note => {
                this.newNote=note
                console.log(this.newNote);
                
            });
            this.showAdd = false;
            this.noteType = null;  
        },
        changePlaceHolder() {
            if (this.noteType) return "Title.."            
            return "Take a note..."
        },
        addList() {
            return (this.showAdd && this.noteType === 'noteTodos');
        }
    },
    created() {
        keepService.getNewNote().then(note => {
            this.newNote=note
            console.log(note);    
        })

    }
}

