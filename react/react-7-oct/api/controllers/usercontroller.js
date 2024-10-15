const User = require('../models/User');

let addUser =async(req,res) => {
    try{
        let users = new User(req.body);
        await users.save();
        res.status(200).send({success:true, message: 'Data Save',users:users});
    }catch(e){
        res.status(500).send('Server Error');
    }
}


module.exports ={
    addUser
}