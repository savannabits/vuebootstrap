<template>
  <div class="d-grid">
    <VbButton
      base-class="accordion-button"
      :variant="variant"
      :tag="tag"
      :disabled="disabled"
      :pill="pill"
      :squared="squared"
      :type="type"
      @click="toggleCollapse"
    >
      <slot name="header">{{ header }}</slot>
    </VbButton>
    <VbCollapse :show="collapse" :parent="parent">
      <slot></slot>
    </VbCollapse>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, Ref, ref } from "vue";
import VbCollapse from "@/lib-components/collapse/Collapse.vue";
import VbButton from "@/lib-components/buttons/Button.vue";
export default defineComponent({
  name: "VbAccordionItem",
  components: {
    VbButton,
    VbCollapse,
  },
  props: {
    header: { type: String },
    disabled: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
    squared: { type: Boolean, default: true },
    tag: { type: String, default: "button" },
    type: { type: String, default: "button" },
    variant: { type: String, default: "outline-secondary" },
  },
  setup() {
    const parent: Ref<any> | undefined = inject("parent");
    const collapse = ref(false);
    const toggleCollapse = () => {
      collapse.value = !collapse.value;
    };
    return {
      toggleCollapse,
      collapse,
      parent,
    };
  },
});
</script>
