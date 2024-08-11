import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [remix()],
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
