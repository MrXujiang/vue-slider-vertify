import { App, Plugin } from 'vue';
import Vertify from './src/index.vue';

export const VertifyPlugin: Plugin = {
  install(app: App) {
    app.component('vertify', Vertify);
  },
};

export { Vertify };