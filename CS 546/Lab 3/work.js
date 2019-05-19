const axios = require('axios');

process.on('unhandledRejection', (reason, p) => console.log(reason));

function checkArgs(value1,value2){
    if(!value1 || !value2)
        throw 'Error: Parameter does not exist';
    if (typeof(value1) != 'string' || typeof(value2) != 'string')
        throw 'Error: The Arguement is not of the proper type';
}

function checkArg(value){
    if(!value)
        throw 'Error: Parameter does not exist';
    if (typeof(value)!= "string")
        throw 'Error: The Arguement is not of the proper type';
}

function notfound() {
    throw 'Error: Element not found';
}
async function whereDoTheyWork(firstName, lastName){
    checkArgs(firstName,lastName);
    
    const  names  = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    const  work  = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
    var flag = false;
    for(var i in names.data){
        if (names.data[i].firstName == firstName && names.data[i].lastName == lastName){
            var Firsty = names.data[i].firstName;
            var Lasty = names.data[i].lastName;
            intendssn = names.data[i].ssn; 
            flag = true;
        }
        

    }
    if (flag == false)
        notfound();   
    
    
    for(var j in work.data){
        if (work.data[j].ssn == intendssn){
            if (work.data[j].willBeFired == true)
                return Firsty + ' ' + Lasty + ' - ' + work.data[j].jobTitle + ' at ' + work.data[j].company + 'He/She will be Fired.';
            else
                return Firsty + ' ' + Lasty + ' - ' + work.data[j].jobTitle + ' at ' + work.data[j].company + 'YAY!! He/She will not be Fired.';
        }
    }


}
//whereDoTheyWork("s","sd");

async function findTheHacker(ip){
    const  names  = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    const  work = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    checkArg(ip);
    var flag = false;
    for (var i in names.data) {
        if (ip == work.data[i].ip)
            var intendedssn = work.data[i].ssn;
            flag = true;
    }
    if (flag == false)
        throw `Not found`;
    for (var j in names.data){
        if (intendedssn == names.data[j].ssn)
            return names.data[j].firstName + ' ' + names.data[j].lastName + ' is the Hacker.';
    }
    
}

module.exports={
    whereDoTheyWork:whereDoTheyWork,
    findTheHacker:findTheHacker,
    
}