const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://souravrd211530052:souravrj@rdreact.qjumg.mongodb.net/reacttest?retryWrites=true&w=majority&appName=rdecweb');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error in connecting the DB", error);
  }
}

module.exports = connect;
