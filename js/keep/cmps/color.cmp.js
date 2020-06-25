export default {
  props: ["note"],
  template: `
          <section class="colors flex">
            <div class="color" v-for="color in colors" :style="color" @click="reportVal(color)">
            </div>
          </section>
      `,
  data() {
    return {
      colors: [
        { backgroundColor: "#84a2da" },
        { backgroundColor: "#84a2da" },
        { backgroundColor: "#465164" },
        { backgroundColor: "#66339991" },
        { backgroundColor: "#66339991" },
      ],
    };
  },
  methods: {
    reportVal(color) {
      this.note.style.backgroundColor = color.backgroundColor;
      this.$emit("setVal", this.note);
    },

    setColor(color) {
      this.note.style.backgroundColor = color;
    },
  },
};
