import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    deps:
    {
      interopDefault: true
    },
    globals: true,
    setupFiles: 'tests/setup.ts'
  }
})