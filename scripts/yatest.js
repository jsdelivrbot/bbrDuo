/* eslint indent:0 vars-on-top:0*/

switch (process.argv[2]) {
    case "default":
        var utilize = require("../dist/yagso");

        console.log(utilize.version);
        break;
}