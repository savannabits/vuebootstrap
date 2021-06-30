<template>
  <div v-collapse="show">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import BCollapse from "@/directives/BCollapse";
import { defineComponent, Ref, ref, toRef, watch } from "vue";
export default defineComponent({
  name: "VbCollapse",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const show: Ref<Boolean> = toRef(props, "show");
    return {
      show,
    };
  },
  directives: {
    collapse: BCollapse,
  },
});
</script>
