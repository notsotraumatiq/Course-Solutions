const express = require("express");
const router = express.Router();
const mongoCollections = require("../config/mongoCollections");
const details = mongoCollections.details;
const axios = require('axios')

async function get(id) {
    if (!id) {
        res.status(500).json({error : "You must provide an id to search for"});
        return;
    } 
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    for (var i in data){
        if(data[i].id == id){
            return (data[i]);
        }
    }
    res.status(500).json({error : "Ain't no post with that id"});
    return;
    
    
  }
router.get("/:id", async (req, res) => {
  //  try {
      
      const post = await get(req.params.id);

      res.render('single', {post : post});
//    } catch (e) {
//      res.status(404).json({ message: "Post not found" });
//    }
  });
module.exports = router;
