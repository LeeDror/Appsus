//  <note-list :notes="notesToShow"> </note-list>
import noteList from "../cmps/note-list.cmp.js";
import noteEdit from "../cmps/note-edit.cmp.js";
// import noteText from '../cmps/note-text.cmp.js'
// import noteImg from '../cmps/note-img.cmp.js'
// import noteTodos from '../cmps/note-todos.cmp.js'
// import noteVideo from '../cmps/note-video.cmp.js'

import { keepService } from "../services/keep.service.js";

export default {
  template: `
        <section class="keep-app">
            <input class="note-search" type="text" placeholder="Search in title" v-model="filter">
            <div class="keep-content" @click="onShowEdit()">
                <div class="new-note">    
                    <input type="text" placeholder="Take a note...">                    
                    <i class="fas fa-font"></i>&nbsp;
                    <i class="fas fa-image"></i>&nbsp;
                    <i class="fab fa-youtube"></i>&nbsp;
                    <i class="fas fa-list-ul"></i>
                </div>  
                <div @click="onShowEdit()">     
                    <note-list :notes="notesToShow" @click="onShowEdit()"></note-list>
                </div>  
                <note-edit v-if="showEdit"></note-edit>      
            </div>
        </section>
    `,
  data() {
    return {
      notes: [],
      filter: null,
      showEdit: false
    };
  },
  created() {
    keepService.getNotes().then((notes) => {
      return (this.notes = notes);
    });
  },
  computed: {
    notesToShow() {
      const filter = this.filter;
      if (!filter) return this.notes;
      let filteredNotes = this.notes.filter((note) => {
        return note.info.title.toLowerCase().includes(filter.toLowerCase());
      });
      return filteredNotes.sort((a, b) => a.isPinned - b.isPinned);
    },
  },
  methods: {
    onShowEdit() {
      this.showEdit = true;
      console.log('onShowEdit');
      
    },
  },
  components: {
    noteList,
    noteEdit,
  },
};
