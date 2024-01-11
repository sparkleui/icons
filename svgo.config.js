/** @type {import('svgo').Config} */
export default {
    multipass: false,
    js2svg: {
        eol: 'lf',
        indent: 4,
        pretty: true,
    },
    plugins: [
        'cleanupListOfValues',
        {
            name: 'removeAttrs',
            params: {
                attrs: ['clip-rule', 'fill'],
            },
        },
        'removeComments',
        'removeDoctype',
        'removeXMLProcInst',
        {
            name: 'resetAttrs',
            params: {
                attributes: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '16',
                    height: '16',
                    viewBox: '0 0 16 16',
                    fill: 'currentColor',
                },
            },
            fn(_root, params) {
                return {
                    element: {
                        enter(node, parentNode) {
                            if (node.name === 'svg' && parentNode.type === 'root') {
                                node.attributes = {};

                                for (const [key, value] of Object.entries(params.attributes)) {
                                    node.attributes[key] = value;
                                }
                            }
                        },
                    },
                };
            },
        },
    ],
};
