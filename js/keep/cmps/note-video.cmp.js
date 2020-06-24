export default {
    props: ['info'],
    template: `
    <section>
        {{info.title}}
        {{info.text}}
        {{info.url}}

        <video>
            <source src="info.url" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
    `
}

