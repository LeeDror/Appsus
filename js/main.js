
import { myRouter } from './routes.js'

import appHeader from './pages/app-header.cmp.js';
import userMessage from "./cmps/user-message.cmp.js";

new Vue({
  el: '#app',
  router: myRouter,
  template: `
        <div>
            <app-header />
            <main>
                <user-message/>
                <router-view />
            </main>
            <footer class="app-footer">
              <h4 class="logo">Appsus</h4>
                coffeerights 2020
            </footer>
        </div>
    `,
  components: {
    // appsusApp,
    appHeader, userMessage
  }
})

