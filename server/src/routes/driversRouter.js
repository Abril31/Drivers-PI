const { Router } = require("express");
const {
  getAllDriversHandler,
  getDriverByIdHandler,
  createDriverHandler,
} = require("../handlers/driversHandler");
const driversRouter = Router();

driversRouter.get("/", getAllDriversHandler);
driversRouter.get("/:id", getDriverByIdHandler);
driversRouter.post("/", createDriverHandler);

module.exports = driversRouter;
