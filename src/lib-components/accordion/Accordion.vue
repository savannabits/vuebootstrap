<template>
  <div ref="root" class="accordion" :class="[classes]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref, toRef } from "vue";

export default defineComponent({
  name: "VbAccordion",
  props: {
    open: { type: Boolean, default: false },
    flush: { type: Boolean, default: false },
  },
  setup(props) {
    const root = ref(null);
    const open = toRef(props, "open");
    const flush = toRef(props, "flush");
    const classes = [
      {
        "accordion-flush": flush.value,
        open: open.value,
      },
    ];
    provide("parent", root.value);
    return {
      classes,
    };
  },
});
</script>
