export default {
  props: ['book'],
  template: `
    <router-link :to="'/book/details/' + book.id">
        <li class="book-preview flex column">
            <h4>{{book.title}}</h4>
            {{book.listPrice.amount}}
            {{book.currency}}
            <img :src="book.thumbnail" />
        </li>
    </router-link>
    `,
};
