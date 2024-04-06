import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(
  {
  plugins: [react()],
  resolve:{
    /*alias:{
      find: "@", replacement: path.resolve(__dirname, "./src"),
      "@pages":path.resolve(__dirname,'./src/pages'),
      "@service":path.resolve(__dirname,'./src/service'),
      "@repository":path.resolve(__dirname,'./src/repository'),
      "@fireconfig":path.resolve(__dirname,'./src/firebase'),
      "@_components":path.resolve(__dirname,'./src/components'),
    }*/
  },
})
