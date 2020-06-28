export default {
  props: ["note"],
  template: `
          <section class="colors flex">
            <div class="color" v-for="color in colors" :style="color" @click="setColor(color)">
            </div>
          </section>
      `,
  data() {
    return {
      colors: [
        { backgroundColor: "#84a2da" },
        { backgroundColor: "#5fd3c3" },
        { backgroundColor: "#66339991" },
        { backgroundColor: "#da8678" },
        { backgroundColor: "#d959ae" },
        { backgroundColor: "#f8e32db8" },        
      ],
    };
  },
  methods: {
    setColor(color) {
      this.note.style.backgroundColor = color.backgroundColor;
      this.$emit("setVal", this.note);
    }
  },
};
