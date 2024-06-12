const express = require("express")
const router = express.Router();
const { getAll, getOneById, create, updateById, deleteById } = require("../contollers/mainController.js")
const secondController = require("../contollers/secondController.js")

// let planets = require("../data/planets.json ")

router.get("/api/planets", getAll)

router.get("/api/planets/:id", getOneById)

router.post("/api/planets", create)

router.put("/api/planets/:id", updateById)

router.delete("/api/planets/:id", deleteById)

router.delete("/api/planets/deleteall", secondController.deleteAllPlanets)

module.exports = router   