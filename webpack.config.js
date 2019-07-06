const path            = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const generator       = require("@muntrue/generateimports");

generator.vue({
    folders: [ "./src/vue-components" ],
    output: "./src/vue-importsfile.js"
});

// webpack.config.js
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.scss$/,
                use: [
                    "vue-style-loader", "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }, {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    }
};