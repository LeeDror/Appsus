export default {
    name:'sort',
    template: `
        <section class="mail-sort flex space-around">
           <p>Sort by  :</p>
           </br>

           <select v-model="sortBy" name="district" >
               <option value="0">RecivedAt</option>
               <option value="0">subject</option>
           </select>

        </section>
    `,
    data() {
        return {
            sortBy: ''
        }
    },
    methods: {
        sort() {
            console.log('mail-sort',this.sortBy)
            this.$emit('sort', this.sortBy);
        }

    }
}

// /  <optgroup v-for='district in districts'>
// <option v-for="region in district.regions" :value="region">{{ region }}</option>
// </optgroup>
// </select>

//        <label for="RecivedAt"> receive date</label>
//        <input type="radio" id="RecivedAt" name="RecivedAt" value="RecivedAt" v-on:click="sort" v-model="sortBy"> 
//        <label for="Subject">subject</label>          
//        <input type="radio" id="Subject" name="Subject" value="Subject" v-on:click="sort" v-model="sortBy">