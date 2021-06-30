<template>
  <div
    class="container p-2 mx-auto my-4 border justify-content-center"
    id="app"
  >
    <h4>Button Color</h4>

    <div class="gap-2 d-grid d-md-block">
      <vb-button variant="primary">Primary</vb-button>
      <vb-button variant="secondary">Secondary</vb-button>
      <vb-button variant="info">Info</vb-button>
      <vb-button variant="success">Success</vb-button>
      <vb-button variant="warning">Warning</vb-button>
      <vb-button variant="danger">Danger</vb-button>
      <vb-button variant="light">Light</vb-button>
      <vb-button variant="dark">Dark</vb-button>
      <vb-button variant="link">Link</vb-button>
    </div>

    <h4>Outline</h4>
    <vb-button variant="outline-primary" class="m-2">Primary</vb-button>
    <vb-button variant="outline-secondary" class="m-2">Secondary</vb-button>
    <vb-button variant="outline-info" class="m-2">Info</vb-button>
    <vb-button variant="outline-success" class="m-2">Success</vb-button>
    <vb-button variant="outline-warning" class="m-2">Warning</vb-button>
    <vb-button variant="outline-danger" class="m-2">Danger</vb-button>
    <vb-button variant="outline-light" class="m-2">Light</vb-button>
    <vb-button variant="outline-dark" class="m-2">Dark</vb-button>
    <vb-button variant="outline-link" class="m-2">Link</vb-button>

    <h4>Sizes</h4>
    <vb-button variant="outline-primary" size="sm" class="m-2"
      >sm Button</vb-button
    >

    <vb-button variant="outline-primary" size="md" class="m-2"
      >md Button</vb-button
    >
    <vb-button variant="outline-primary" size="lg" class="m-2"
      >lg Button</vb-button
    >

    <h4>Block Buttons</h4>
    <div class="gap-2 d-grid">
      <vb-button variant="primary" class="m-2">Primary</vb-button>
      <vb-button variant="success" class="m-2">Secondary</vb-button>
      <vb-button variant="warning" class="m-2">Info</vb-button>
      <vb-button variant="danger" class="m-2">Success</vb-button>
    </div>

    <h4>Pill Buttons</h4>
    <div class="gap-2 p-2 row row-cols-5">
      <vb-button variant="primary" pill>Primary</vb-button>
      <vb-button variant="success" pill>Secondary</vb-button>
      <vb-button variant="warning" pill>Info</vb-button>
      <vb-button variant="danger" pill>Success</vb-button>
    </div>

    <h4>Squared Buttons</h4>
    <div class="gap-2 p-2 row row-cols-5">
      <vb-button variant="primary" squared>Primary</vb-button>
      <vb-button variant="success" squared>Secondary</vb-button>
      <vb-button variant="warning" squared>Info</vb-button>
      <vb-button variant="danger" squared>Success</vb-button>
    </div>

    <h2>Collapse</h2>
    <hr />
    <vb-button variant="danger" @click="toggleCollapse"
      >Toggle Collapse</vb-button
    >
    <vb-collapse :show="collapse">
      <h3>Hi There!</h3>
      <p>
        Hi there! I am a collapsable element that can only be shown once show is
        set to true.
      </p>
    </vb-collapse>

    <h2>Accordion</h2>
    <hr />
    <vb-accordion :flush="false" class="mb-4">
      <vb-accordion-item header="First Item">
        The first Item in the accordion
      </vb-accordion-item>
      <vb-accordion-item header="Second Item">
        The second Item in the accordion
      </vb-accordion-item>
      <vb-accordion-item header="Third Item">
        The third Item in the accordion
      </vb-accordion-item>
    </vb-accordion>
  </div>
</template>
<script lang="ts">
import vuebootstrapSample from "@/lib-components/vuebootstrap-sample.vue";
import VbButton from "@/lib-components/buttons/Button.vue";
import VbCollapse from "@/lib-components/collapse/Collapse.vue";
import VbAccordionItem from "@/lib-components/accordion/AccordionItem.vue";
import VbAccordion from "@/lib-components/accordion/Accordion.vue";
import { defineComponent, ref } from "vue";

// Uncomment import and local "components" registration if library is not registered globally.
// import { VuebootstrapSample } from '@/entry.esm';

export default defineComponent({
  components: {
    vuebootstrapSample,
    VbButton,
    VbCollapse,
    VbAccordion,
    VbAccordionItem,
  },
  name: "ServeDev",
  setup() {
    const collapse = ref(false);
    const toggleCollapse = () => {
      collapse.value = !collapse.value;
    };
    return {
      toggleCollapse,
      collapse,
    };
  },
});
</script>
<style scoped></style>
