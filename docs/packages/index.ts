/* eslint-disable */
import { App, Plugin } from 'vue';

import { VertifyPlugin } from './Vertify';

const XiPlugin: Plugin = {
  install(app: App) {
    VertifyPlugin.install?.(app);
  },
};

export default XiPlugin;

export * from './Vertify'