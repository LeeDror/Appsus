import { bookService } from "../services/book.service.js";
// @click.native:"addBook(book)"
export default {
  template: `
      <section class="book-add">
          <input type="text" placeholder="Search For a Book..." v-model="filterTitle"/>
          <button @click="getBooks()">Search</button>
          <ul>
            <li class="flex" v-if="googleBooks" v-for="book in googleBooks" :book=book :key="book.id">
                <span>{{book.volumeInfo.title}}</span>
                <button @click="addBook(book)">+</button>
            </li>
          </ul>
      </section>
    `,
  data() {
    return {
      filterTitle: '',
      googleBooks: null,
    };
  },
  methods: {
    addBook(book) {
      console.log(book);
      
      bookService.addGoogleBook(book);
    },
    getBooks() {
      bookService.getGoogleBooks(this.filterTitle).then((books) => {
        return this.googleBooks = books;
      });
    },
  },
  components: {
    bookService,
  },
};