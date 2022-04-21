 const userDocument = require('../models/userDocument')

 const createUserProduct = async function(req, res){
     productData = req.body
     let savedProduct= await userDocument.create(productData)
     res.send ({msg: savedProduct})
 }



 const isFreeAppUser = async function(req,res,next){
    let freeappuser = req.headers.isfreeappuser
    if(freeappuser){
        next()
    }else {
        res.send({err: "The Mandatory header not present, user can't be created"})
    }
}

module.exports.isFreeAppUser = isFreeAppUser
 module.exports.createUserProduct =createUserProduct