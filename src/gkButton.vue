<template>
  <button :style="style">
    {{ text }}
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "GkButton", // vue component name
  props: {
    text: {
      default: "Click Me",
      type: String,
    },
    uppercase: {
      default: true,
      type: Boolean,
    },
    bgColor: {
      default: "#AAA09C",
      type: String,
    },
    textColor: {
      default: "#fff",
      type: String,
    },
    shadow: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      style: {
        "--color": this.textColor,
        "--bgColor": this.bgColor,
        "--transform": this.uppercase ? "uppercase" : "",
        "--shadow": this.shadow ? "0px 8px 15px rgba(0, 0, 0, 0.3)" : "",
      },
    };
  },
});
</script>

<style scoped>
button {
  background-color: var(--bgColor);
  color: var(--color);
  text-transform: var(--transform);
  box-shadow: var(--shadow);
  border: none;
  font-weight: bold;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin: 1em;
  transition-duration: 0.4s;
}
button:disabled {
  background-color: gray;
  color: darkgray;
}
button:hover {
  filter: brightness(115%);
}
</style>
