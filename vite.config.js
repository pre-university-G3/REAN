import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    tailwindcss()
  ],
})
=======
  plugins: [react(), tailwindcss(), flowbiteReact()],
})
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
