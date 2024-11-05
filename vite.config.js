import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weekly-maritime-security-report/",
  server: {
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  define: {
    "process.env": {},
  },
});
