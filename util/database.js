const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "todo_db",
  password: "Abhishek@123",
});
module.exports = pool.promise();
