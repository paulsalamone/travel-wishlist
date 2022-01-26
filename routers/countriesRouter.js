const countriesRouter = require("express").Router();
const pool = require("../conf");

countriesRouter.get("/", (req, res) => {
  pool.query("SELECT * from countries").then((data) => res.json(data));
});

module.exports = countriesRouter;
