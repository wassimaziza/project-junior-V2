const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'autos'
});

connection.connect((err)=>{
  if(err) throw err;
  else console.log('db jawha behy')
})

module.exports = connection;