
import { utils } from '../services/utils.service.js';


export default {
  template: `
      <form class="review-add flex column">
          Name: <input type="text" v-model="review.name"/>
          Read at: <input type="date" value="date.now()" v-model="review.readDate"/>
          <select v-model="review.rate">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="text" rows="5" placeholder="Type here..." v-model="review.text"/>
          <button @click="saveReview" :disabled="!isValid">Save</button>
      </form>
    `,
    data() {
      return {
        review: {
          bookId: null,
          name: null,
          readDate: Date.now(),
          rate: null,
          text: null
        }
      }
    },
    computed: {
      isValid() {
        return (this.review.name && 
            this.review.rate && 
            this.review.text)
      }
    },
    methods: {
      saveReview() {
        console.log(this.review);
        const oldReviews = utils.loadFromStorage('reviews')
        var reviews = (oldReviews) ? (oldReviews) : [] ;
        reviews.push(this.review)
        utils.storeToStorage('reviews', reviews);
        this.review =  {
          bookId: null,
          name: null,
          readDate: Date.now(),
          rate: null,
          text: null
        }
      }
    },
    created() {
      this.review.bookId = this.$route.params.bookId; 
    },
    components: {
      utils
    }
};
