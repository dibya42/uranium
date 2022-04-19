const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createBook", BookController.createBook  )




// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)


//const timestamp=require('log-timestamp');
const moment=require("moment")
const middlewareAssgn = require("../middlewares/middlewareController")

const middleware = function(req, res, next) {
    let timestamp=moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`${timestamp} , ${req.socket.remoteAddress} ${req.route.path}`)
    next();
}

router.get("/api1", middleware, middlewareAssgn.api1 )

router.get("/api2", middleware, middlewareAssgn.api2)

router.get("/api3", middleware, middlewareAssgn.api3)

router.get("/api4", middleware, middlewareAssgn.api4)

module.exports = router;