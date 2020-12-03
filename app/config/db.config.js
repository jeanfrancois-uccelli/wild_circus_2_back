module.exports = {
  HOST: "ec2-79-125-86-58.eu-west-1.compute.amazonaws.com",
  USER: "cabwbjxppdjcol",
  PASSWORD: "3ae600e946901f0cdd62d6377d98ea59eb8e5752ebb18c97f7331d872740d193",
  DB: "d22tvmn6jjep0d",
  PORT: "5432",
  
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};
