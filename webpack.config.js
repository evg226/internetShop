const path=require("path");
module.exports={
    mode:"development",
    entry: './src/index',
    output: {
        filename: 'build.js',
        path:path.resolve(__dirname,"dist")
    }
}