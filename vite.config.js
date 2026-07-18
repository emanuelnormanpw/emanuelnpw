import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
        }),
    ],
    resolve: {
        tsconfigPaths: true,
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@elements": path.resolve(__dirname, "src/elements"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@layouts": path.resolve(__dirname, "src/components/layouts"),
            "@modules": path.resolve(__dirname, "src/components/modules"),
            "@shapes": path.resolve(__dirname, "src/components/shapes"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
    build: {
        chunkSizeWarningLimit: 100,
        rollupOptions: {
            onwarn(warning, warn) {
                if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
                    return;
                }
                warn(warning);
            },
        },
    },
    define: {
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
});
