const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://souravrd211530052:souravrj@rdreact.qjumg.mongodb.net/reacttest?retryWrites=true&w=majority&appName=rdreact');
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }

}

module.exports = connect;