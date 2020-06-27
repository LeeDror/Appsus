import { bookRouter } from '../routes.js'

import bookList from '../cmps/book-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import userMsg from '../cmps/user-msg.cmp.js';
import bookHeader from './book-header.cmp.js';
import { bookService } from "../services/book.service.js";

//    <book-header/>


export default {
  //router: bookRouter,
  template: `
    <main class='app-main'>
        <book-filter v-show="!selectedBook" @filtered="setFilter"></book-filter>
        <book-list :books="booksToShow" v-if="!selectedBook" @selected="selectBook"></book-list>
        <user-msg v-if="showMsg"/>
    </main>`,
  data() {
    return {
      books: [],
      selectedBook: null,
      filterBy: null,
      showMsg: false
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    selectBook(book) {
      this.selectedBook = book;
    },
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;
      let filteredBooks = this.books.filter((book) =>
        book.title.toLowerCase().includes(filterBy.byName.toLowerCase())
      );
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.listPrice.amount >= filterBy.fromPrice &&
          book.listPrice.amount <= filterBy.toPrice
      );
      return filteredBooks;
    },
  },
  created() {
    bookService.getBooks()
      .then(books => this.books = books);
  },
  components: {
    bookList,
    bookDetails,
    bookFilter,
    userMsg,
    bookHeader
  }
}
