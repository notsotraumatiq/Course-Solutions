const express = require("express");
const router = express.Router();
const animals = require("../data/animals");

router.get("/", async (req, res) => {
    try {
      
      const getAllAnimals = await animals.getAll();
      
      res.json(getAllAnimals);
    } catch (e) {
      res.status(500).send();
    }
  });
  router.get("/:id", async (req, res) => {
    try {
      const animal = await animals.getByid(req.params.id);
      res.json(animal);
    } catch (e) {
      res.status(404).json({ message: "Post not found" });
    }
  });
  router.post("/", async (req, res) => {

    try {
      const newAnimal = await animals.create(req.body.name, req.body.type);
      res.json(newAnimal);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  });
  router.put("/:id", async (req, res) => {

    try {
      
      const updatedAnimal = await animals.rename(req.params.id, req.body.newName);
      res.json(updatedAnimal);
   } catch (e) {
      if (!req.param.id) {
        res.status(404).json({ error: "id not found"})
      }
        res.status(400).json({ error: e });
    }
  });
  router.delete("/:id", async (req, res) => {

    try {
      
      const deletedAnimal = await animals.remove(req.params.id);
      res.json(deletedAnimal);
   } catch (e) {
      if (!req.param.id) {
        res.status(404).json({ error: "id not found"})
      }
        res.status(400).json({ error: e });
    }
  });
  

  
  module.exports = router;
  