//@ts-check
const { stcConfig } = require('@stylable/cli');

const { createNamespaceStrategyNode } = require('@stylable/node');

module.exports = {
    defaultConfig() {
        return {
            // set a custom namespace resolver
            resolveNamespace: createNamespaceStrategyNode({
                prefix: 'st_',
                hashFragment: 'minimal',
                strict: true,
            }),
        };
    },
    stcConfig: stcConfig({
        options: {
            srcDir: './src',
            outDir: './st-types',
            dts: true,
            cjs: false,
        },
    }),
};
