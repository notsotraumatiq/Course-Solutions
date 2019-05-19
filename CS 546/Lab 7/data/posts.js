const mongoCollections = require("./mongoCollections");
const posts = mongoCollections.posts;


module.exports ={
  async create(title, author, content){
    if (!title) throw "You must provide a name for your posts";

    if (!author) throw "You must provide a type of posts";
    if (typeof title !== "string") throw "Bad Argumeeeent";
    if (typeof author !== "string") throw "Bad Argumeeent";
    if (typeof content !== "string") throw "Bad Argumeeeent";
  
    var newPost = {
            title: title,
            author: author,
            content: content,

    }
    const postsCollection = await posts();
    const insertInfo = await postsCollection.insertOne(newPost);

    //if (insertInfo.insertedCount === 0) throw "Could not add posts";

    const newId = insertInfo.insertedId;

    const post = await this.get(newId);
    return post;
  },
  async get(id) {
    if (!id) throw "You must provide an id to search for";

    const postsCollection = await posts();
    //const posts = await postsCollection.findOne({ id: id });
    
    var ObjectID = require('mongodb').ObjectID;
    var objectid = new ObjectID(id);
    const post = await postsCollection.findOne({_id: objectid});

    if (post === null) throw "Ain't no post with that id";

    return post;
  }, 
  async getAll(){
    const postsCollection = await posts();
    const allposts = await postsCollection.find({}).toArray();

    return allposts;
},
async remove(id) {
  if (!id) throw "Aint no id provided to search for";

  const postsCollection = await posts();
  
  try {
      var ObjectID = require('mongodb').ObjectID;
      var objectid = new ObjectID(id);
      const deletedpost = await this.get(id);
      const deletionInfo = await postsCollection.removeOne({ _id: objectid });
      var dPost = {
          deleted: true,
          data: deletedpost
      }
  return dPost;
  }
  catch {
      throw `Could not delete the posts with id of ${id} because it doesn't exist`;
  }
},
  async rename(id, newTitle) {
    if (!id) throw "You must provide an id to search for";

    if (!newTitle) throw "You must provide a name for your title";
    
    const postsCollection = await posts();
    
    try{
        var ObjectID = require('mongodb').ObjectID;
        var objectid = new ObjectID(id);
        const renameAnimal = await this.get(id);
        const updatedInfo = await postsCollection.updateOne({ _id: objectid }, {$set: {title:newTitle}});

    }catch{
        throw `Could not rename the posts with id of ${id} because it doesn't exist`;
    }
    return await this.get(id);
}

}