const fs = require('fs');
console.log(process.env);
module.exports = {

  development: {
    username: "root",
    password: "saeh98110352468",
    database: "apiproducts",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.USER,
    password: process.env.PASSWD,
    database: process.env.NAME || 'apiproducts',
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    dialect: "mysql"
  }

}