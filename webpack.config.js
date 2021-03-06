module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            data: `
                                  @/assets/styles/styles.module.scss";
                                  @/assets/styles/variables.scss";
                                `
                        }
                    }
                ]
            }
        ],
    },
};
