const mongoose = require("mongoose");
const schema = mongoose.Schema;

const thingSchema = schema({
  titel: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  userId: {
    type: String,
  },
  price: {
    type: String,
  },
});

module.exports = mongoose.model("Thing", thingSchema);
