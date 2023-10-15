var mysql = require('mysql2')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Testing@2023',
  database: 'MyFlixDB'
})

connection.connect()

connection.query('SELECT * from members', function (error, results, fields) {
  if (error) throw error
  console.log('The solution is: ', results[0].solution)
  console.log(JSON.stringify(results))
})

connection.end()
