const animals = require("./animals");
const connection = require("./mongoConnection");
 


const main = async() => {
    
    const mortimer = await animals.create("Atiq", "Giraffe");
    console.log(mortimer);

    // const allMyAnimals = await animals.getAll();
    // console.log(allMyAnimals);
    // const blubBlub = await animals.get("5c798df1d525d821702b032d");
    // console.log(blubBlub);
    
    // const noMatch = await animals.get("BADID");
    // console.log(noMatch)

    //  const blubBlub = await animals.remove("5c79a3c95236e7441099c964");
    //  console.log(blubBlub);

    //  const bubba = await animals. rename("5c79a58e05cbc82eacdd5ad5f", "Bubba");
    // console.log(bubba);
    const db = await connection();
    await db.serverConfig.close();
}

main().catch(error => {
  console.log(error);
});
