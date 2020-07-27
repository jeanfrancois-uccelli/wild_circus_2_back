const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
};

 
const models = require("../models");

module.exports = (app) => {
  app.get("/resas", (req, res) => {
    models.resa.findAll()
        // { include: [models.Cook, models.Feedback], })
        .then((resa) => res.json(resa));
  });

  app.post("/resas", (req, res) => {
    models.resa.create(req.body).then((resa) => res.json(resa));
  });
};