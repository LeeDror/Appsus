import homePage from './pages/home-page.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import bookAdd from './pages/book-add.cmp.js';

const bookRoutes = [
    // {
    //     path: '/',
    //     component: homePage
    // },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/book/add',
    //     component: bookAdd
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },

];

export const bookRouter = new VueRouter({ routes: bookRoutes })
