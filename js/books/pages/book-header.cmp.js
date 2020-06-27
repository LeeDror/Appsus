export default {
  template: `
        <header class="book-header flex align-center space-between">
            <h1>Books</h1>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/book">Book App</router-link> | 
                <router-link to="/book/add">Add Book</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    `,
};
