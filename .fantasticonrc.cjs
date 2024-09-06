const { FontAssetType, OtherAssetType } = require('fantasticon');
const codepoints = require('./src/sparkle-icons.json');

/** @type {import('fantasticon').RunnerOptions} */
module.exports = {
    inputDir: './src/icons',
    outputDir: './public/fonts',
    fontTypes: [FontAssetType.WOFF, FontAssetType.WOFF2],
    assetTypes: [OtherAssetType.JSON, OtherAssetType.SCSS],
    name: 'sparkle-icons',
    prefix: 'si',
    codepoints,
    fontsUrl: './fonts',
    formatOptions: {
        json: {
            indent: 4,
        },
    },
    templates: {
        scss: './src/template/scss.hbs',
    },
    pathOptions: {
        woff: './public/fonts/sparkle-icons.woff',
        woff2: './public/fonts/sparkle-icons.woff2',
        json: './src/sparkle-icons.json',
        scss: './src/scss/abstracts/variables/_icons.scss',
    },
};
