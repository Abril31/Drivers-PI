const { Router } = require("express");
const {
  getAllDriversHandler,
  getDriverByIdHandler,
  postDriverHandler,
} = require("../handlers/driversHandler");
const driversRouter = Router();

driversRouter.get("/", getAllDriversHandler);
driversRouter.get("/:idDriver", getDriverByIdHandler);
driversRouter.post("/", postDriverHandler);

module.exports = driversRouter;
