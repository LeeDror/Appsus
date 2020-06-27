export default {
  template: `
        <header class="app-header flex align-center space-between">
            <h1 class="logo">Appsus</h1>
            <i @click="showNav=!showNav" class="fas fa-chess-board"></i>
            <nav class="app-nav" v-show="showNav" @click="showNav=!showNav">
                <router-link to="/Home"><i class="fas fa-home"></i><div>Home</div></router-link>
                <router-link to="/Book"><i class="fas fa-book-open"></i><div>Book</div></router-link>
                <router-link to="/keep"><i class="fas fa-sticky-note"></i><div>Keep</div></router-link>
                <router-link to="/mail"><i class="fas fa-envelope-open"></i><div>Mail</div></router-link>
                <router-link to="/about"><i class="fas fa-address-card"></i><div>About</div></router-link>
            </nav>
        </header>
    `,
    data() {
        return {
            showNav: false
        }
    }
};
