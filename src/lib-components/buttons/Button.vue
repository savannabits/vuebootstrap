<template>
  <button :class="[classes]">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, toRef, toRefs } from "vue";
import Renderable from "../global/Renderable";
export default defineComponent({
  name: "VbButton",
  props: {
    baseClass: { type: String, default: "btn" },
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
    const baseClass = toRef(props, "baseClass");
    const classes = [
      `${baseClass.value}`,
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
