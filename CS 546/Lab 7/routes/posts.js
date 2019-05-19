const express = require("express");

const router = express.Router();
const posts = require("../data/posts");


router.get("/", async (req, res) => {
    try {
      
      const getAllAnimals = await posts.getAll();
      
      res.json(getAllAnimals);
    } catch (e) {
      res.status(500).send();
    }
  });
  router.get("/:id", async (req, res) => {
    try {
      
      const post = await posts.get(req.params.id);

      res.json(post);
    } catch (e) {
      res.status(404).json({ message: "Post not found" });
    }
  });
  router.post("/", async (req, res) => {

    try {
      const newPost = await posts.create(req.body.title, req.body.author,req.body.content);
      console.log(newPost)
      res.json(newPost);
    } catch (e) {
        res.status(400).json({ error: e });
    }
  });
  router.put("/:id", async (req, res) => {

    try {
      console.log(req.body.newTitle)
      const updatedPosts = await posts.rename(req.params.id, req.body.newTitle);
      res.json(updatedPosts);
      console.log(updatedPosts)
   } catch (e) {
      if (!req.param.id) {
        res.status(404).json({ error: "id not found"})
      }
        res.status(400).json({ error: e });
    }
  });
  router.delete("/:id", async (req, res) => {

    try {
      
      const deletedPosts = await posts.remove(req.params.id);
      res.json(deletedPosts);
   } catch (e) {
      if (!req.param.id) {
        res.status(404).json({ error: "id not found"})
      }
        res.status(400).json({ error: e });
    }
  });
module.exports = router;