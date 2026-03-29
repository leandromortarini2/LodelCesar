import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Agregado para frontend-resources:
      "@/frontend-resources": path.resolve(__dirname, "src/frontend-resources"),
      // Si usás import con mayúscula (recomendado cambiarlo), podés agregar también:
      "@/components-frontend-resources": path.resolve(
        __dirname,
        "src/frontend-resources/components"
      ),
    },
  },
});
