import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/aurora-icons.js'),
            fileName: pkg.name,
            formats: ['es'],
            name: pkg.config.fullName,
        },
        rollupOptions: {
            input: resolve(__dirname, 'src/aurora-icons.js'),
            output: {
                assetFileNames: ({ name }) => {
                    if (name === 'style.css') return `${pkg.name}.min.css`;
                    return name;
                },
            },
        },
    },
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [autoprefixer()],
        },
    },
});
