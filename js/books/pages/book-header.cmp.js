import bookApp from './book-app.cmp.js';
import bookAdd from './book-add.cmp.js';

export default {
  template: `
        <header class="book-header">
            <nav> 
                <router-link to="/book/list">Book App</router-link> |
                <router-link to="/book/add">Add Book</router-link>
            </nav>
            <hr>
            <router-view /> 
        </header>
    `,
    components: {
        bookApp,
        bookAdd
      }
};
