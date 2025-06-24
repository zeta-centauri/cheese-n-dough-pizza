import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: {
                tsconfigPath: 'tsconfig.app.json',
            },
        }),
    ],
    resolve: {
        alias: {
            shared: path.resolve(__dirname, 'src/shared'),
            widgets: path.resolve(__dirname, 'src/widgets'),
            entities: path.resolve(__dirname, 'src/entities'),
            components: path.resolve(__dirname, 'src/components'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
});
