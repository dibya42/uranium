const UserModel= require("../models/userModel")
// 11 April
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
// module.exports.getXINRBooks =  getXINRBooks
// module.exports.getRandomBooks = getRandomBooks
// module.exports.getParticularBooks = getParticularBooks
// module.exports.getBooksInYear = getBooksInYear
// module.exports.createBook = createBook
// module.exports.bookList = bookList
