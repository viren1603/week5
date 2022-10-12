require("dotenv").config();
const sequlize = require("sequelize")
let database = new sequlize(process.env.DB, process.env.DB_NAME, process.env.DB_PASSWORD, { port: 3306, dialect: "mysql" })

database.authenticate().then(() => {
    console.log("connection sucessfulley");
}).catch((err) => {
    console.log(err, 'db err');
})


module.exports = database;