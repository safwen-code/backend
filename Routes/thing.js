const express = require("express");
const multer = require("../middelware/multer-config");
const router = express.Router();
const Thing = require("../Models/Thing");
const fs = require("fs");
//add doc
router.post("/add", multer, async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  const { titel, description, price, userId } = req.body;
  try {
    const thing = new Thing({
      titel,
      description,
      userId,
      price,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    });
    console.log("thing", thing);
    await thing.save();
    return res.status(201).json({ thing });
  } catch (error) {
    return res.status(500).json({ errorF });
  }
});

//get all docs
router.get("/alldoc", async (req, res) => {
  try {
    const thing = await Thing.find();
    console.log(thing);
    return res.status(200).json({ thing });
  } catch (err) {
    res.status(500).json({ err });
  }
});

//get doc by Id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let thing = await Thing.findOne({ id });
    console.log(thing);
    return res.status(200).json({ thing });
  } catch (err) {
    return res.status(500).json({ err });
  }
});

//update thing
router.put("/updatedocs/:id", multer, async (req, res) => {
  // const { titel, description, price, userId } = req.body;
  try {
    const thingObject = req.file
      ? {
          ...req.body,
          imageUrl: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
        }
      : { ...req.body };
    const thingUpdated = await Thing.updateOne(
      { id: req.params.id },
      { ...thingObject, id: req.params.id }
    );
    console.log(thingObject);
    return res.status(200).json({ thingObject });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

//delete thing
router.delete("/delete/:id", multer, async (req, res) => {
  const id = req.params.id;
  try {
    const thing = await Thing.findOne({ id });
    const filename = thing.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, async () => {
      let thingdel = await Thing.deleteOne({ id });
     
    });
    return res.status(200).json({ thing });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;
