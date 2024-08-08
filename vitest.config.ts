import { defineConfig } from 'vitest/config'
import * as path from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    deps:
    {
      interopDefault: true
    },
    globals: true,
    setupFiles: 'tests/setup.ts',
    coverage: {
      include: ['src']
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})