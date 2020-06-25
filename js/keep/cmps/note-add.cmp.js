
import { keepService } from "../services/keep.service.js";

export default {
  template: `
    <section>
        <div class="keep-content">
            <div class="new-note">    
                <input type="text" v-if="noteType" placeholder="Title" v-model="content.title"> 
                <input type="text" :placeholder="placeholder" v-model="content.text"> 
                <i class="fas fa-font" @click="setType('noteText')"></i>&nbsp;
                <i class="fas fa-image" @click="setType('noteImg')"></i>&nbsp;
                <i class="fab fa-youtube" @click="setType('noteVideo')"></i>&nbsp;
                <i class="fas fa-list-ul" @click="setType('noteTodos')"></i>
                <button v-if="noteType" @click="saveNote">Close</button>
            </div> 
        </div> 
    </section>
    `,
  data() {
    return {
      content: {title: '', text: ''},
      noteType: null,
      placeholder: "Take a note...",
    }
  },
  methods: {
    setType(type) {
        this.noteType = type;
        switch (type) {
        case "noteText":
            this.placeholder = "Type something...";
            break;
        case "noteTodos": 
            this.placeholder = "Enter todos...";
            break;
        case "noteImg": 
            this.placeholder = "Enter image URL...";
            break;
        case "noteVideo": 
            this.placeholder = "Enter video URL...";
            break;
        }
        console.log(this.noteType, 'this.noteType');
        
    },
    saveNote() {
    
      keepService.addNote(this.noteType, this.content);
      this.$emit("addedNote");
      this.content = {title: '', text: ''};
      this.showAdd = false;
      this.noteType = null;
      this.placeholder = "Take a note...";
    }
  },
  created() {
    this.noteType = null;
  }
};
