
import {myRouter} from './routes.js'

// import appsusApp from './pages/appsus-app.cmp.js';
import appHeader from './pages/app-header.cmp.js';

new Vue({
  el: '#app',
  router: myRouter,
  template: `
        <div>
            <app-header />
            <main>
                <router-view />
            </main>
            <footer class="app-footer">
                coffeerights 2020
            </footer>
        </div>
    `,
  components: {
    // appsusApp,
    appHeader
  }
})

