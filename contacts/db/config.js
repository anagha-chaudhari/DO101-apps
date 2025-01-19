require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contacts:contacts@localhost:5432/contacts';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});

//var db_user = process.env["database-user"];
//var db_pass = process.env["database-password"];
//var db_name = process.env["database-name"];
  
module.exports = { pgconn }