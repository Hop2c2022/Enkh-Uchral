const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(1);
const hash = bcrypt.hashSync("mypass123", salt)
console.log(hash);