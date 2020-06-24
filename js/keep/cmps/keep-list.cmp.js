
import keepPreview from './book-preview.cmp.js';

export default {
  props: ['books'],
  template: `
        <ul class="book-list flex wrap clean-list align-center justify-center">
            <book-preview v-for="book in books" @click.native="selectBook(book)" :book="book" :key="book.id"/>
        </ul>
    `,
  methods: {
    selectBook(book) {
      this.$emit('selected', book);     
    },
  },
  components: {
    bookPreview
  }
}
