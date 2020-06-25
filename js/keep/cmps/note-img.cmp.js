export default {
    props: ['note'],
    template: `
    <section>
        <img :src="note.info.url"/>
    </section>
    `
}

