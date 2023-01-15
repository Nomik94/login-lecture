const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'dog94',
  database: 'login-lecture',
});

db.connect(console.log('연결 완료'));
module.exports = db;
