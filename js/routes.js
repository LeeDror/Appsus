import keepApp from './keep/pages/keep-app.cmp.js';
import mailApp from './mail/pages/mail-app.cmp.js';
import bookHome from './books/pages/book-home.js';

import bookApp from './books/pages/book-app.cmp.js';
import bookDetails from './books/pages/book-details.cmp.js';
import bookAdd from './books/pages/book-add.cmp.js';

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
        path: '/mail',
        component: mailApp
    },
    {
        path: '/book/',
        component: bookApp,
        children: [   
            {
                path: 'details/:bookId',
                component: bookDetails
            },
            {
                path: 'add',
                component: bookAdd
            },
        ]
    }
];
export const myRouter = new VueRouter({ routes: myRoutes })
