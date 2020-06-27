export default {
  template: `
        <section class="about-us app-main">
            <nav>
                <router-link to="/about/company">Our Company</router-link> | 
                <router-link to="/about/team">Our Team</router-link> | 
                <router-link to="/about/service">Our Services</router-link>
            </nav>
            <router-view /> 
        </section>
    `,
};
