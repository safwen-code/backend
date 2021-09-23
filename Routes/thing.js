const express = require("express");
const multer = require("../middelware/multer-config");
const router = express.Router();
const Thing = require("../Models/Thing");

//add doc
router.post("/add", multer, (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  const { titel, description, price, userId } = req.body;

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
  thing
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
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
router.put("/updatedocs/:id", multer, (req, res) => {
  // const { titel, description, price, userId } = req.body;
  const thingObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Thing.updateOne({ id: req.params.id }, { ...thingObject, id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
  console.log(thingObject);
});

//delete thing
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const thingDeleted = await Thing.findOne({ id });
    console.log(thingDeleted);
    await thingDeleted.remove();
    return res.status(200).json({ msg: `thin is deleted ${thingDeleted}` });
  } catch (error) {
    return res.status(500).json({ error });
    console.log(msg.error);
  }
});

module.exports = router;
