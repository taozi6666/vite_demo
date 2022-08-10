import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import * as path from 'path'
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }), ElementPlus({
    useSource: true
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
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