module.exports = {
    options: {
        transform: [
            ['babelify', {presets: ["@babel/preset-env"]}]
        ],
        browserifyOptions: {
            debug: true
        }
    },
    dailyjournal: {
        src: ["../scripts/main.js"],
        dest: "../../public/dailyjournal.js"
    }
}
