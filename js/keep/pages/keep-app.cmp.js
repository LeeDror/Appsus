import noteTxt from '../cmps/note-txt.cmp.js'
import noteImg from '../cmps/note-img.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'

import { keepService } from '../services/keep.service.js'


export default {
    template: `
        <section v-if="survey">
            <h2 :style="{color: survey.color}">{{survey.title}}</h2>
            <input v-model="survey.color" />
            <form @submit.prevent="save">
                <div v-for="(cmp, idx) in survey.cmps">
                    <component :is="cmp.type"  :info="cmp.info" @setVal="setAns($event, idx)"></component>
                </div>
                <button>Save</button>
            </form>
            <pre>{{answers}}</pre>
        </section>
    `,
    data() {
        return {
            notes: null,
            answers: []
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes
            })

    },
    methods: {
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx);
            // this.answers[idx] = ans
            this.answers.splice(idx, 1, ans)

        },
        save() {
            console.log('Saving..');
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    }
};
