const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  
  { ssl: {
    rejectUnauthorized: false
  },
    host: config.HOST,
    sslmode:require,
    dialect: config.dialect,
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    },
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.resa = require("../models/resa.model.js")(sequelize, Sequelize);
db.lieu = require("../models/lieu.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.resa.belongsTo(db.user, {
  through: "user_resas",
  foreignKey: "resaId",
  otherKey: "userId",
});
db.user.belongsToMany(db.resa, {
  through: "user_resas",
  foreignKey: "userId",
  otherKey: "resaId",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
