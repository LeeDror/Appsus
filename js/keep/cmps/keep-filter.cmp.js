export default {
  template: `
        <section class="search">
            <input type="text" placeholder="Title" v-model="filterBy.byName" @input="filter"/>
            <input type="number" placeholder="from Price" v-model.number="filterBy.fromPrice" @input="filter"/>
            <input type="number" placeholder="To price" v-model.number="filterBy.toPrice" @input="filter"/>
        </section>
    `,
  data() {
    return {
      filterBy: {
        byName: '',
        fromPrice: -Infinity,
        toPrice: Infinity,
      },
    }
  },
  methods: {
    filter() {
      this.$emit('filtered', this.filterBy);      
    }
  }
}
