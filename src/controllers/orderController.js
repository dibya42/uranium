const OrderModel = require("../models/orderModel")

// const orderPurchased = async function (req, res) {
//     let orderData = req.body
//     let orderTake = await OrderModel.create(orderData)
//     res.send({msg: orderTake})
// }
const orderPurchased = async function(req, res) {
    let body = req.body
    let savedData = await OrderModel.create(body)
    res.send({msg: savedData})
}
// const getUsersData= async function (req, res) {
    //     let allUsers= await UserModel.find()
    //     res.send({msg: allUsers})
    // }

    
const createOrder = async function(req,res){
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.headers["isfreeappuser"]
    let price = await productModel.find({productId})
    let userValidation  = await userModel.exists({userId})
    let productValidation = await productModel.exists({productId})
    if(userValidation){
        if(productValidation){
            let purchase = await OrderModel.create(data)
            if(header == true){
                await userModel.find({_id : userId}).update({balance:   `${balance}-${price}`},{new:true})
            }
            res.send({success : purchase})
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}

module.exports.createOrder = createOrder
module.exports.orderPurchased = orderPurchased