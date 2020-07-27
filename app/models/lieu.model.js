module.exports = (sequelize, Sequelize) => {
  const Lieu = sequelize.define("lieux", {
    name: {
      type: Sequelize.STRING,
    },
    lat: {
      type: Sequelize.INTEGER,
    },
    long: {
      type: Sequelize.INTEGER,
    },
  });

  return Lieu;
};
