const Book = require('../models/Book');

let addBook =async(req,res) => {
    try{
        let books = new Book(req.body);
        await books.save();
        res.status(200).send({success:true, message: 'Data Save',books:books});
    }catch(e){
        res.status(500).send('Server Error');
    }
}


module.exports ={
    addBook
}