require("dotenv").config();

const { USERNAME, PASSWORD, DATABASE, HOSTNAME, PORT } = process.env;

module.exports = {
  development: {
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    host: HOSTNAME,
    dialect: "postgres",
    port: PORT,
  }
};
