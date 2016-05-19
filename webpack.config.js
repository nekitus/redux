module.exports = {
    context: __dirname + "/src",
    entry: "./Main.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
        resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions:        ['', '.js', '.jsx']
    },
    module: {

        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query:
                {
                    presets:['react', 'es2015', "stage-0"],
                    plugins: [
                        "add-module-exports"
                    ]
                }
            }
        ]
    },
    watchDelay: 50,
    watch: true
};
