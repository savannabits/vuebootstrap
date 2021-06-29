<template>
  <div v-collapse="show">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref, toRef, watch } from "vue";
import Collapse from "bootstrap/js/src/collapse";
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
    collapse: {
      created(el, binding) {
        el.classList.add("collapse");
        new Collapse(el, { toggle: false });
      },
      beforeUpdate(el: Element, binding, vnode) {
        // if (binding.oldValue === binding.value) { return }
        /* el.classList.add("collapsing");
        el.classList.remove("collapse", "show"); */
        if (binding.value) {
          new Collapse(el, { toggle: false }).show();
        } else {
          new Collapse(el, { toggle: false }).hide();
        }
      },
    },
  },
});
</script>
