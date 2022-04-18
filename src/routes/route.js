const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController = require('../controllers/publisherController')
const bookController= require("../controllers/bookController")
const batchesController= require("../controllers/batchesController")
const developersController = require('../controllers/developersController');


router.post("/createAuthor", authorController.createAuthor  )

router.post('/createPublisher', publisherController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get('/get-all-books', bookController.fetchbooks)

router.put('/books', bookController.updateBooks)

router.post('/batches', batchesController.createBatch)

router.post("/developers", developersController.createDevelopers)

router.get("/scholarship-developers", developersController.scholership)

router.get('/developers?percentage=value1&program=value2',developersController.devFromBatch)

module.exports = router;