// import noteTxt from '../cmps/note-txt.cmp.js'
// import noteImg from '../cmps/note-img.cmp.js'
// import noteTodos from '../cmps/note-todos.cmp.js'
// import noteVideo from '../cmps/note-video.cmp.js'
import noteList from '../cmps/note-list.cmp.js'

import { keepService } from '../services/keep.service.js'


export default {
    template: `
        <section class="keep-app">
            <input class="note-search" type="text" placeholder="Search in title" v-model="filter">
            <div class="keep-content">
                <div class="new-note">    
                    <input type="text" placeholder="Take a note...">                    
                    <i class="fas fa-font"></i>&nbsp;
                    <i class="fas fa-image"></i>&nbsp;
                    <i class="fab fa-youtube"></i>&nbsp;
                    <i class="fas fa-list-ul"></i>
                </div>
                <note-list :notes="notesToShow"> </note-list>           
            </div>
        </section>
    `,
    data() {
        return {
            notes: [],
            filter: null
        }
    },
    created() {
        console.log('keep-app');  
        keepService.getNotes()
            .then(notes => {
                return this.notes = notes});
    },
    computed: {
        notesToShow() {
        const filter = this.filter;
        if (!filter) return this.notes;
        let filteredNotes = this.notes.filter((note) => {
            return note.info.title.toLowerCase().includes(filter.toLowerCase()) 
        });
        return filteredNotes;
      }
    },
    components: {
        noteList
      }
};


//<book-list></book-list>
