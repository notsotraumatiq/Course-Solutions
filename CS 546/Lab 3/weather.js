const axios = require('axios');

function checkArgs(value1, value2){

        
    if (typeof(value1) != 'string' || typeof(value2) != 'string')
    throw 'Error: The Arguement or parameters is not of the proper type';
    
    if(!value1 || !value2)
        throw 'Erorr: Null';
    
}
function errorthrow(){
    throw "Error not found";
}
function notfound(){
    throw new Error('Error: Element not found');
}

async function shouldTheyGoOutside(firstName, lastName) {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    const weather = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    var intendzip;
    checkArgs(firstName,lastName);
    // console.log(weather.data);
    var flag = false;
    for(var i in data){
        if (data[i].firstName == firstName && data[i].lastName == lastName){
           var Firsty = data[i].firstName;
           var Lasty = data[i].lastName;
           intendzip = data[i].zip; 
           flag = true;
        }
        
    }
    if (flag == false)
        notfound(); 
    
    for (var j in weather.data){

    
        
        if(intendzip == weather.data[j].zip){
            if (weather.data[j].temp>= '34.0')
                
                return "Yes," + Firsty + " " + Lasty + "should go Outside";
            else
                return "No" + Firsty + " " + Lasty + "should not go Oustide";
        }

    }

}

module.exports = {
    shouldTheyGoOutside:shouldTheyGoOutside,
}