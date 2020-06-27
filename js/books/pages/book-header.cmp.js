import bookApp from './book-app.cmp.js';

export default {
  template: `
        <header class="book-header">
            <nav> 
                <router-link to="/book">Book App</router-link> |
                <router-link to="/book/add">Add Book</router-link>
            </nav>
            <hr>
            <book-app/>
            <router-view /> 
        </header>
    `,
    components: {
        bookApp
      }
};
