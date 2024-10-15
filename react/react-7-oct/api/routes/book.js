const express = require('express');
const bookcontroller = require('../controllers/bookcontroller');
const bodyParser = require('body-parser')
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false,
}));
router.post('/add/book',(req,res)=>{
    bookcontroller.addBook(req,res);
});

module.exports = router;