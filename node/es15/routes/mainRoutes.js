const express = require("express")
const router = express.Router();
const { getAll, getOneById, create, updateById, deleteById,uploadImage,logIn,signUp } = require("../contollers/mainController.js")
const secondController = require("../contollers/secondController.js")

const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null,'uploads/')
  },
  filename: function(req,file,cb){
    cb(null,file.originalname)
  }
})

const upload =multer({storage:storage})

// let planets = require("../data/planets.json ")

router.get("/api/planets", getAll)

router.get("/api/planets/:id", getOneById)

router.post("/api/planets", create)

router.put("/api/planets/:id", updateById)

router.delete("/api/planets/:id", deleteById)

router.delete("/api/planets/deleteall", secondController.deleteAllPlanets)

router.post("/api/planets/:id/image",upload.single('planet'),uploadImage)

router.post("/api/users/login",logIn)

router.post("/api/users/signup",signUp)

module.exports = router   