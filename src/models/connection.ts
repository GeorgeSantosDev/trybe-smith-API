import mySql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export default mySql.createPool({
  host: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345678',
  database: process.env.DB_DATABASE || 'Trybesmith',
}); 
