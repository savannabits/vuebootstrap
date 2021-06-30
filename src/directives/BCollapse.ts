import { DirectiveBinding, VNode } from "vue";
import Collapse from "bootstrap/js/src/collapse";
let bsCollapse: any = null;
const getBsCollapse: any = (el: HTMLElement | Element) => {
  if (!bsCollapse) {
    bsCollapse = new Collapse(el, { toggle: false });
  }
  return bsCollapse;
}
export default {
  created(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    el.classList.add("collapse");
    getBsCollapse(el);
  },
  beforeUpdate(el: Element, binding: DirectiveBinding, vnode: VNode) {
    if (binding.value) {
      getBsCollapse(el).show();
    } else {
      getBsCollapse(el).hide();
    }
  },
}