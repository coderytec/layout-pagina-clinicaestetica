import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/layout-pagina-clinicaestetica/', // <-- Adicione esta linha com o nome do seu repositório
})