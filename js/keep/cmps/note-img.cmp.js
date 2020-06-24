export default {
    props: ['info'],
    template: `
    <section>
        {{info.title}}
        {{info.text}}
        <img :src="info.url"/>
    </section>
    `   
}

