import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/js/sparkle-icons.js'),
            fileName: 'sparkle-icons',
            formats: ['es'],
            name: 'sparkle-icons',
        },
        rollupOptions: {
            input: resolve(__dirname, 'src/js/sparkle-icons.js'),
            output: {
                assetFileNames: 'sparkle-icons.min.[ext]',
                banner: `
                    /*!
                     * Sparkle Icons (${pkg.homepage})
                     * Version: ${pkg.version}
                     * License: ${pkg.license}
                     * Copyright: @ ${new Date().getFullYear()} ${pkg.author}
                     */`,
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
