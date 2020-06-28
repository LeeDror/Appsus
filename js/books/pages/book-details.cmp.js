
import reviewAdd from '../cmps/review-add.cmp.js';
import { bookService } from '../services/book.service.js';
import { utils } from "../../services/utils.service.js";

export default {
  template: `
        <section class="book-details" v-if="book">
            <button><router-link to="/book">Back</router-link></button>
            <h2>{{book.title}} <span v-for="author in book.authors"> by {{author}}</span> </h2>
            
            <p>{{showBookAge}}</p>
            <p>{{showReadingLength}}</p>
            <p>{{book.description}}</p>
            <p>{{book.listPrice.amount}} {{book.listPrice.currencyCode}}
            <p>{{book.language}}</p>
            <div class="flex">
            <div class="reviews flex column">
                reviews:
                <div v-if="reviews" v-for="review in reviews">
                {{review.rate}}-{{review.text}}
                </div>
              </div>
              <review-add></review-add>
            </div>
            <router-link v-if="prevBookId" :to="'/book/' + prevBookId">Prev</router-link>
            <router-link v-if="nextBookId" :to="'/book/' + nextBookId">Next</router-link>

        </section>`,
  data() {
          return {
              book: null,
              reviews: null,
              nextBookId: null,
              prevBookId: null
          }
      },
  methods: {
    close() {
      this.$emit('close', null);
    },
    loadBook() {
      const {bookId} = this.$route.params;
      bookService.getBookById(bookId)
        .then(book => {
          console.log(book);
           this.book = book
           console.log(this.book );
          })
      const reviews = utils.loadFromStorage('reviews')
      if (reviews) this.reviews = reviews.filter(review => review.bookId === bookId)
      bookService.getNextBookId(bookId)
        .then(bookId => this.nextBookId = bookId)
      bookService.getPrevBookId(bookId)
        .then(bookId => this.prevBookId = bookId)
    }
  },
  created(){
    this.loadBook();
  },
  computed: {
    showReadingLength() {
      var str = '';
      if (this.book.pageCount > 500) str = 'Long Reading';
      else if (this.book.pageCount > 200) str = 'Decent Reading';
      else if (this.book.pageCount < 100) str = 'Light Reading';
      return this.book.pageCount + '-' + str;
    },
    showBookAge() {
      var str = '';
      var bookAge = new Date().getFullYear() - this.book.publishedDate;
      if (bookAge > 10) str = 'Veteran Book';
      else if (bookAge < 1) str = 'New!';
      return this.book.publishedDate + '-' + str;
    },
  },
  components: {
    reviewAdd,
    utils
  },
  watch: {
    '$route.params.bookId'(bookId) {
        this.loadBook();
    }
  }
}



