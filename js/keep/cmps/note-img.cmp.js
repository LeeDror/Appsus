export default {
    props: ['info'],
    template: `
    <section>
        <input type="text" v-model="info.title"/>
        <input type="text" v-model="info.text"/>
        <img :src="info.url"/>
    </section>
    `   
}

