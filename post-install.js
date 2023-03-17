const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.resolve(process.env.INIT_CWD, "./.prettierrc.js"))) {
    fs.copyFileSync(path.resolve(process.env.INIT_CWD, "./node_modules/@taskli-st/prettier-config/.prettierrc.js"), path.resolve(process.env.INIT_CWD, "./.prettierrc.js"));
}

if (!fs.existsSync(path.resolve(process.env.INIT_CWD, "./.prettierignore"))) {
    fs.copyFileSync(path.resolve(process.env.INIT_CWD, "./node_modules/@taskli-st/prettier-config/.prettierignore"), path.resolve(process.env.INIT_CWD, "./.prettierignore"));
}
