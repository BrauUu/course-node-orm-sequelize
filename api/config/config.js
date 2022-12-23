require('dotenv/config');

const config = {
  "development": {
    "username":  process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "english_school",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = config