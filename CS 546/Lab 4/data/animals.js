const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;

module.exports ={
    async get(id) {
        if (!id) throw "You must provide an id to search for";
    
        const animalsCollection = await animals();
        // console.log(animalsCollection);
        // const animal = await animalsCollection.findOne({ id: id });
        
        var ObjectID = require('mongodb').ObjectID;
        var objectid = new ObjectID(id);
        const animal = await animalsCollection.findOne({_id: objectid});
    
        if (animal === null) throw "Ain't no animal with that id";
    
        return animal;
      },
    
    async create(name, animalType){
        if (!name) throw "You must provide a name for your animal";
    
        if (!animalType) throw "You must provide a type of animal";
        if (typeof name !== "string") throw "Bad Argumeeeent";
        if (typeof animalType !== "string") throw "Bad Argumeeent";
        
        var newAnimal = {
                name: name,
                animalType: animalType
        };
        
        const animalsCollection = await animals();
        const insertInfo = await animalsCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw "Could not add animal";

    const newId = insertInfo.insertedId;

    const animal = await this.get(newId);
    return animal;
    },
    
    async getAll(){
        const animalsCollection = await animals();
        const allAnimals = await animalsCollection.find({}).toArray();

        return allAnimals;
    },

    async remove(id) {
        if (!id) throw "Aint no id provided to search for";

        const animalsCollection = await animals();
        
        try {
            var ObjectID = require('mongodb').ObjectID;
            var objectid = new ObjectID(id);
            const deletedAnimal = await this.get(id);
            const deletionInfo = await animalsCollection.removeOne({ _id: objectid });
            var dAnimal = {
                deleted: true,
                data: deletedAnimal
            }
        return dAnimal;
        }
        catch {
            throw `Could not delete the animal with id of ${id} because it doesn't exist`;
        }
    },
    async rename(id, newname) {
        if (!id) throw "You must provide an id to search for";

        if (!newname) throw "You must provide a name for your dog";

        const animalsCollection = await animals();
        
        try{
            var ObjectID = require('mongodb').ObjectID;
            var objectid = new ObjectID(id);
            const renameAnimal = await this.get(id);
            const updatedInfo = await animalsCollection.updateOne({ _id: objectid }, {$set: {name:newname}});
    
        }catch{
            throw `Could not rename the animal with id of ${id} because it doesn't exist`;
        }
        return await this.get(id);
  }



}