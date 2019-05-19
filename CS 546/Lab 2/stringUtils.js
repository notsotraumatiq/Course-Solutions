const capitalize = function capitalize(text) {
    if (typeof text !='string' || !text){
        throw `Error: The string doesn't exist or is not of the proper type`;
    }
    var newtext = new String();
    newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return newtext;
}



const repeat = function repeat(string,num) {
    if (typeof string !='string' || !string){
        throw `Error: The string doesn't exist or is not of the proper type`;
    }
        if (!num || num<=0)
        throw `Error: Number doesn't exist or has to be positive`;
    var Rstring ="";
    while(num >0){
        Rstring= string+Rstring;
        num--;
    }
    return Rstring;    

}



const countChars = function countChars(text) {
    // Implement question 3 here
    if (typeof text !='string' || !text){
        throw `Error: The string doesn't exist or is not of the proper type`;
    }
    result = { };
    for(var i = 0; i < text.length; ++i) {
        if(!result[text[i]])
        result[text[i]] = 0;
    ++result[text[i]];
    }
    return result;
}


module.exports={
    capitalize:capitalize,
    repeat:repeat,
    countChars:countChars
}