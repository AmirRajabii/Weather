import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
			$pages: path.resolve("./src/pages"),
			$components: path.resolve("./src/components"),
		},
	},
});
 
