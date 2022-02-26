// const path = require('path');
const CracoAntDesignPlugin = require("craco-antd");
const CracoAlias = require("craco-alias");

module.exports = {
     plugins: [
         {
             plugin: CracoAntDesignPlugin,
             options: {
                 /* choose either customizeTheme or customizeThemeLessPath */
                 customizeTheme: {
                     "@primary-color": "#7546c9",
                     "@link-color": "#7546c9"
                 },
                 // customizeThemeLessPath: path.join(__dirname, "src/style/theme.less"),
             }
         },
         {
             plugin: CracoAlias,
             options: {
                 source: "options",
                 baseUrl: "./",
                 aliases: {
                     "@": "./src",
                 }
             }
         }
     ],
};