module.exports = {
  HOST: "eu-cdbr-west-03.cleardb.net",
  USER: "bff6271bedb5eb",
  PASSWORD: "1ecd4135",
  DB: "heroku_61e11ee852786ea",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
