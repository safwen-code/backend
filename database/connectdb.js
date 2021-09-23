const mongoose = require("mongoose");
const mongoUri = require("./db.json").mongoUri;

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
