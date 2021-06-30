import { DirectiveBinding, VNode } from "vue";
import Collapse from "bootstrap/js/src/collapse";
const getBsCollapse: any = (el: HTMLElement | Element, binding: DirectiveBinding) => {
  const state = binding.value?.state || false;
  const parent = binding.value?.parent || null;
  return new Collapse(el, { toggle: state, parent: parent || '' });
}
export default {
  created(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    el.classList.add("collapse");
    getBsCollapse(el, binding);
  },
  beforeUpdate(el: Element, binding: DirectiveBinding, vnode: VNode) {
    const state = binding.value?.state || false;
    if (state) {
      getBsCollapse(el, binding).show();
    } else {
      getBsCollapse(el, binding).hide();
    }
  },
}