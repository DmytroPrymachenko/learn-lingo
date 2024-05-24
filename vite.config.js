import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/learn-lingo",
  plugins: [react()],
});
