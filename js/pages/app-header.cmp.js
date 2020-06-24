export default {
  template: `
        <header class="app-header flex align-center space-between">
            <h1>Appsus</h1>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/book">Book</router-link> | 
                <router-link to="/keep">keep</router-link> | 
                <router-link to="/mail">mail</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    `,
};
