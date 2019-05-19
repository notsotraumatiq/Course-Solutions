    const axios = require('axios');
   

    function checkArgs(value){

        
        if (typeof(value) != 'number')
        throw 'Error: The Arguement is not of the proper type';
        
        if(value < 0 )
        throw 'Error: Value is less than 0';
        
    }
    function errorthrow(){
        throw "Error not found";
    }

    function checkZero(value){
        if(!value ||value == 0)
            throw 'Error: There is No value given or its zero';
        
    }
    function checkLength(){
        throw 'Error Out of Bounds';
    }
    async function getPeopleById(ids){
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        checkZero(ids);
        checkArgs(ids);
        if(Object.keys(data).length < ids)
            checkLength();
  //     console.log(Object.keys(data))
        for (var i in data) {
            if (data[i].id == ids) {
                return data[i].firstName + ' ' + data[i].lastName;
            }
            
        }
        
    }
    
    


    
    async function lexIndex(index){
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        checkArgs(index);
        checkZero(index);
        if(Object.keys(data).length < index)
            checkLength();
        
        for (var i in data){
            data.sort(function(a,b){
                var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
                // return a.lastName > b.lastName;
            });

        }
        
        return data[index].firstName + ' ' + data[index].lastName;
    
    }

    async function firstNameMetrics(){
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        totalLetters = 0;
        const vowels = ["a", "e", "i", "o", "u"];
        var totalVowels = 0;
        var totalConsonants = 0;
        var longestFirstName = "";
        var shortestFirstName = "Not this name";
        for (var i in data){
            for (var j=0; j< data[i].firstName.length ;j++){
                totalLetters++;
                
                if(vowels.indexOf(data[i].firstName[j].toLowerCase()) != -1)
                    totalVowels++;
                else
                    totalConsonants++;
                
            if (longestFirstName.length < data[i].firstName.length)
                longestFirstName = data[i].firstName;     
                
            
            if (shortestFirstName.length > data[i].firstName.length)
                shortestFirstName = data[i].firstName;     
                
            }
            
            
        }        
            var retVal = {totalLetters ,
                totalVowels ,
                totalConsonants ,
                longestFirstName ,
                shortestFirstName }
            
        return retVal;
    
    }

    module.exports ={
        
        getPersonById:getPersonById,
        lexIndex:lexIndex,
        firstNameMetrics:firstNameMetrics,

    }