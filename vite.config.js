import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    css: {
        postcss: {
            plugins: [
                require('autoprefixer')
            ]
        },
        /*scss: {
            additionalData: `$injectedColor: orange;`
        }*/
    },
    build: {
        //brotliSize: false, // 默认为 true
        outDir:'./docs',
    },
    /*server: {
        // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        host: '0.0.0.0',
        port: 56438, // 服务器端口号 docs
        open: false, // 是否自动打开浏览器
        // 代理
        proxy: {
            '/api': {
                target: 'http://xxx.xxx.xx',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }*/
})
