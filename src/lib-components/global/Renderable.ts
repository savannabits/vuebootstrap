import { defineComponent, h, mergeProps, toRef } from "vue";
export default defineComponent({
  name: "Renderable",
  props: { 
      staticClass: {default: '' },
      tag: { default: "div" } 
  },
  setup(props, { attrs, slots }) {
    const staticClass = toRef(props, "staticClass");
    const tag = toRef(props, "tag");
    const mergedAttrs = mergeProps(attrs, { class: staticClass.value });
    return () => h(tag.value, mergedAttrs, slots);
  },
});