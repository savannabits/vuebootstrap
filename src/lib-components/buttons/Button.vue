<template>
  <button class="btn" :class="[classes]">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, toRef, toRefs } from "vue";
import Renderable from "../global/Renderable";
export default defineComponent({
  name: "VbButton",
  props: {
    disabled: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
    pressed: { type: Boolean, default: null },
    size: { type: String },
    squared: { type: Boolean, default: false },
    tag: { type: String, default: "button" },
    type: { type: String, default: "button" },
    variant: { type: String, default: "secondary" },
  },
  components: {
    Renderable,
  },
  setup(props) {
    const rProps = toRefs(props);
    const variant = toRef(props, "variant");
    const classes = [
      `btn-${variant.value || "secondary"}`,
      {
        [`btn-${rProps.size.value}`]: rProps.size.value,
        "rounded-pill": rProps.pill.value,
        "rounded-0": rProps.squared.value && !rProps.pill.value,
      },
    ];
    return {
      classes,
    };
  },
});
</script>
