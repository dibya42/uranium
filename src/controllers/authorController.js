const authorModel = require('../models/authorModel')
//  const bookModel2 = require('../models/bookModel2')

const createAuthor = async function(req, res){
    const body = req.body;
    if(data.author_id){
        let savedData = await authorModel.create(body)
    res.send({msg: savedData})
     }else{
        res.send({msg: "author_id must be present"})
     }
}


const createNewBook = async function (req, res){
    const reqBook = req.body;
    const Saved = await bookModel2.create(reqBook)
    res.send({msg: Saved})
}

const allBooks = async function(req, res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].autor_id
    const booksName = await bookModel2.find({author_id: id}).select({name:1})
    res.send({msg:booksName})
}

const upadatedBookPrice = async function(req, res) {
    const bookDetails = await bookModel2.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})
    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel2.findByIdAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1, _id:0})

    res.send({msg: authorN, updatedPrice})
}

const authorsname = async function(req, res){
    const booksId = await bookModel2.find({price: {$gte:50, $lte:100,}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)

    let temp =[]
    for(let i=0; i<id.length; i++){
        let = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)

    }

    const authorName = temp.flat()

    res.send({msg:authorName})
}
module.exports.createAuthor = createAuthor
 module.exports.createNewBook = createNewBook
 module.exports.allBooks = allBooks
 module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsname