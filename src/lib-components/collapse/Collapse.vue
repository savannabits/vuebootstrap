<template>
  <div v-collapse="{ state: show, parent: parent }">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import BCollapse from "@/directives/BCollapse";
import { defineComponent, ref, Ref, toRef } from "vue";
export default defineComponent({
  name: "VbCollapse",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    parent: {
      type: ref,
      default: null,
    },
  },
  setup(props) {
    const show: Ref<Boolean> = toRef(props, "show");
    const parent = toRef(props, "parent");
    return {
      show,
      parent,
    };
  },
  directives: {
    collapse: BCollapse,
  },
});
</script>
