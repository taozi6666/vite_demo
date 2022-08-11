import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import compressPlugin from "vite-plugin-compression"; //静态资源压缩
import { visualizer } from "rollup-plugin-visualizer";//资源监控
import { viteMockServe } from 'vite-plugin-mock'
// import legacyPlugin from '@vitejs/plugin-legacy'; //浏览器兼容
// import ElementPlus from 'unplugin-element-plus/vite'
// import Inspect from 'vite-plugin-inspect'


import * as path from 'path'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    vue(),
    visualizer(),
    viteMockServe({// 更多配置见最下方
      supportTs: true,
      logger: false,
      mockPath: "./mock/" // 文件位置
    }),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' })],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [IconsResolver({ enabledCollections: ['ep'] }), ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({ autoInstall: true }),
    compressPlugin({ //gzip静态资源压缩
      verbose: true,    // 默认即可
      disable: false,  //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: 'gzip',  //压缩算法
      ext: '.gz', //文件类型
    }),
    // legacyPlugin({
    //   targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
    //   // additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
    // })
    // ElementPlus({ useSource: true }),
    // Inspect(),
  ],
  resolve: {
    alias: {
      '@': pathSrc,
    }
  },
  // 打包配置
  build: {
    // 清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    //警报门槛，限制大文件大小
    // chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        //对静态文件进行打包处理（文件分类）
        //此处打开后会导致背景图路径有问题，所以暂时隐藏，未找到合适的解决方案
        // chunkFileNames: 'assets/js/[name]-[hash].js',
        // entryFileNames: 'assets/js/[name]-[hash].js',
        // assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      }
    },
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