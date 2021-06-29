import { DefineComponent, Plugin } from 'vue';


declare const Vuebootstrap: Exclude<Plugin['install'], undefined>;
export default Vuebootstrap;

export const VuebootstrapSample: DefineComponent<{}, {}, any>;
