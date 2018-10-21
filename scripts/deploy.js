/* eslint indent:0 */
var fs = require("fs-extra");

fs.copy("dist/app", process.argv[2])
    .then(() => console.log("Ok!"))
    .catch(err => console.error(err));
