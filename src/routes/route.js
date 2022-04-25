const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const weathermapController = require("../controllers/weathermapController")
const memeController = require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
//1.
router.get("/getDistrict", CowinController.getDistrictById);
router.get("/getWeatherAll", weathermapController.getWeatherAll);
router.get("/getWeatherTemp", weathermapController.getWeatherTemp);
router.get("/arrangeByTemp", weathermapController.arrangeByTemp);
router.get("/getAllMemes", memeController.getAllMemes);
router.post("/createMeme", memeController.createMeme);

module.exports = router;