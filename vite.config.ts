import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import vitePluginImp from 'vite-plugin-imp'
import viteMockPlugin from './plugins/vitePluginMock'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'PWA React',
    short_name: 'PWA React',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/pwa-512x512.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    type: 'module',
    navigateFallback: 'index.html'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  build: {
    assetsDir: 'assets',
    cssCodeSplit: false // 是否拆分css
  },
  plugins: [
    react(),
    VitePWA(pwaOptions),
    tsconfigPaths(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            // use less
            return `antd/es/${name}/style/index.js`
          }
        }
      ]
    }),
    viteMockPlugin({ isMock: true })
  ]
})
