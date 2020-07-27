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
  app.get("/lieux", (req, res) => {
    models.lieu.findAll()
      // { include: [models.Cook, models.Feedback], })
      .then((lieu) => res.json(lieu));
  });

  app.post("/lieux", (req, res) => {
    models
    .lieu.create(req.body)
    .then((lieu) => res.json(lieu));
  });
};
