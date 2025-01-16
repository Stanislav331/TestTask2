const path = require('path');

module.exports = function override(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [{
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    removeViewBox: false
                                },
                            },
                        }],
                    }
                },
            },
        ],
    });

    return config;
};