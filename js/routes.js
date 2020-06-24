import keepApp from './keep/pages/keep-app.cmp.js';
import bookApp from './books/pages/book-app.cmp.js';
import mailApp from './mail/pages/mail-app.cmp.js';

import homePage from './pages/home-page.cmp.js';
import aboutUs from './pages/about.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutUs
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/mail',
        component: mailApp
    }
];

export const myRouter = new VueRouter({ routes: myRoutes })
