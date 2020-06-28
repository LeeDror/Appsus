export default {
    template: `
        <section class="mail-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search on subjects" v-model="searchBy.bySubject" @input="search"/>
            <input type="text" placeholder="Search on text" v-model="searchBy.byTxt" @input="search"/>
            <input type="text" placeholder="Search on from" v-model="searchBy.byFrom" @input="search"/>
            <button @click="clearSearch"> Clear </button>
        </section>
    `,
    data() {
        return {
            searchBy: {
                bySubject: '',
                byTxt: '',
                byFrom: ''
            }
        }
    },
    methods: {
        search() {
            this.$emit('search', this.searchBy);
        },
        clearSearch() {
            this.searchBy = {
                bySubject: '',
                byTxt: '',
                byFrom: ''
            };
            this.$emit('search', this.searchBy);
        }
    }
}