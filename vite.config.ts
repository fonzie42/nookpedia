import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    server: {
      open: true,
    },
  }

  if (command !== 'serve') {
    config.base = '/nookpedia/'
  }

  return config
})
