const animals = require("./data/animals");
const connection = require("./data/mongoConnection");
 
const main = async() => {

    const sasha = await animals.create("Sasha", "Dog");
    console.log(sasha);

   const lucy = await animals.create("Lucy", "Dog");

    const allMyAnimals = await animals.getAll();
    console.log(allMyAnimals);

    const walrus = await animals.create("Duke", "Walrus");
    console.log(walrus);


    //Enter Sasha _id below in the rename 
    const sashita = await animals.rename("5c79b0fed684e20c705a339b", "Sashita");
    console.log(sashita);
    // Put Lucy _id below
    const removeLucy = await animals.remove("5c79b0fed684e20c705a339c");

    console.log(allMyAnimals);

    console.log("Phew It's Over.");
    const db = await connection();
    await db.serverConfig.close();
}

main().catch(error => {
    console.log(error);
  });
  