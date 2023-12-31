import { Config } from '@stencil/core';
import tailwind, { tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import tailwindConf from './tailwind.config';
import autoprefixer from 'autoprefixer';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';


setPluginConfigurationDefaults({
  tailwindConf,
  tailwindCssPath: './src/styles/tailwind.css',
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
});

export const config: Config = {
  namespace: 'reputex-stencil-library',
  plugins: [tailwind(), tailwindHMR()],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'reputex-stencil-library',
      proxiesFile: '../reputex-react-widget/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'reputex-stencil-library',
      proxiesFile: '../reputex-vue-widget/lib/components.ts',
    }),
  ],
};
