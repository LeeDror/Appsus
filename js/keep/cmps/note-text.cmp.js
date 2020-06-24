export default {
  props: ['info'],
  template: `
    <section>
        {{info.title}}
        {{info.text}}
    </section>
    `
};
