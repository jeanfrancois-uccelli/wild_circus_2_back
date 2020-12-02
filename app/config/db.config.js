module.exports = {
  HOST: "127.0.0.1",
  USER: "postgres",
  PASSWORD: "my-secret-pw",
  DB: "my-db",
  dialect: "postgres",
  PORT: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};
