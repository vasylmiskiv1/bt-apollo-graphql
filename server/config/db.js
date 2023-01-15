const mongoose = require('mongoose');

const connectDB = async = () => {
  mongoose.set("strictQuery", false);
  const conn = mongoose.connect(process.env.MONGO_URI)
  console.log(`Mongo DB connected`.cyan.underline.bold);
}

module.exports = connectDB;