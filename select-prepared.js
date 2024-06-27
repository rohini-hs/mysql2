const mysql = require ("mysql2")

const connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password :'MysqlPass123!',
    database : 'northwind'
})


    connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err.stack)
          return
        }
    console.log('Connected to the database')

    const sql = 'select * from products where supplierID = ?'
    const id = ['3']
    connection.execute(sql,id,(err,results)=>{
        if (err) {
            console.error('Error executing query:', err.stack)
            return}
            console.log('Query results:', results)
    })
    
    connection.end();

})
