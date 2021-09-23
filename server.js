const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const connectdb = require("./database/connectdb");
const thing = require("./Routes/Thing");

const app = express();

const port = process.env.port || 5000;
app.use(express.json({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "images")));

connectdb();
app.use("/thing", thing);

app.listen(port, () => {
  console.log(`server work in ${port}`);
});
