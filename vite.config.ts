import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import pages from "vite-plugin-pages";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [
      { enforce: "pre", ...mdx.default({ remarkPlugins: [] }) },
      react(),
      svgr(),
      pages({
        extensions: ["tsx", "jsx", "mdx"],
        importMode: "sync",
      }),
    ],
  };
});
