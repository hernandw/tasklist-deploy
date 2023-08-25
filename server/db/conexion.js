const { Pool } = require('pg');
require('dotenv').config();

/* const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    allowExitOnIdle: true
})
 */


//Conexión a server remoto desde local
/* const pool = new Pool({
    
    connectionString: process.env.DATABASE_URL,
    ssl: true
})
 */

//conexión a server remotogit push

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  
});

/* const getData = async () => {
    const consulta = 'SELECT NOW()';
    const { rows } = await pool.query(consulta)
    console.log(rows)
}
 */
/* getData() */
module.exports = pool