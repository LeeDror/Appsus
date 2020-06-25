export default {
    props: ['info'],
    template: `
    <section>
        <input type="text" v-model="info.title"/>
        <input type="text" v-model="info.text"/>
        {{info.url}}

        <video>
            <source src="info.url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
    `
}

