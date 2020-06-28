import bookHeader from './book-header.cmp.js';

export default {
  template: `
  <section class="home-page">
    <book-header/>
    <div>Welcome To Our Book shop </div>
    <h3>Find something to read... </h3>      
  </section>      
  `,
  components: {
    bookHeader
  }
}