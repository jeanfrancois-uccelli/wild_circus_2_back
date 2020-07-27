module.exports = (sequelize, Sequelize) => {
  const Resa = sequelize.define("resas", {
    name: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    nbPlace: {
      type: Sequelize.INTEGER
    }
  });

  return Resa;
};