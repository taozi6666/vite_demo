import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
// import Inspect from 'vite-plugin-inspect'


import * as path from 'path'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' }) ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [ IconsResolver({ enabledCollections: ['ep'] }), ElementPlusResolver() ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({ autoInstall: true }),
    // ElementPlus({ useSource: true }),
    // Inspect(),
  ],
  resolve: {
    alias: {
      '@': pathSrc,
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
})