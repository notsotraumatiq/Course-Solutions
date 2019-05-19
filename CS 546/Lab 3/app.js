const people = require("./people");
const weather = require("./weather");
const work = require("./work");

//process.on('unhandledRejection', (reason, p) => { throw reason });


async function main(){
    //const getId = await people.getPeopleById(42132).catch(err => console.log(err));
    // try{
    //     const getId = await people.getPeopleById(42132);
    //     console.log(getId);
    // }catch(e){
    //     console.error(e);
     
    // }

    // try{
    //     const lexI = await people.lexIndex(2);
    //     console.log(lexI);
    // }catch(e){
    //     console.error(e);
    // }

    try{
        const aws = await work.findTheHacker("79.222.16f7.180").catch(err => console.log(err));
        console.log(aws);
    }catch(e){
        console.error(e);
    }

    const Id = await work.findTheHacker("1.1.1.1");
    console.log(Id)


}
//call main
main().catch(console.error())