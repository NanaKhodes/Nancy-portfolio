import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png"],
  plugins: [react()],
});
