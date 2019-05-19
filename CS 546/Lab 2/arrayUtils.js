const head = function head(array){
    if (!array || !Array.isArray(array) || !array.length) {
        throw `Error: Either array does not exist, is not an array, or is empty`;
    }
    return array[0];
}


const last = function last(array){
    if (!array || !Array.isArray(array) || !array.length) {
        throw `Error: Either array does not exist, is not an array, or is empty`;
    }
    return array[array.length-1];
}

const remove = function remove(array,index){
    // index argument is missing
    if (index === undefined) {
        throw 'Error: index is missing';
    }
    if (!array || !Array.isArray(array) || !array.length || !index) {
        throw `Error: Either array does not exist, is not an array, or is empty`;
    }
    if (typeof(index) != "number")
        throw "Not a number amigo";
    if (index <0 || index >= array.length){
        throw `Error Index out of bounds`
    }
    array.splice(index, 1);
    return array;
}
const range = (end, value) =>  {
    if(end <=0 || end == null || end == undefined){
        throw `Error either the end number is not positive or null or undefined`;
    }
    if (typeof end !== "number") {
        throw "provided variable is not a number";
      }
    if (value === undefined) {
        return Array.apply(null, {length : end}).map(Number.call, Number);
    } else {
        return Array(end).fill(value);
    }
}


// const range = function range(end,value){
//     if(end <=0 || end == null || end == undefined){
//         throw `Error either the end number is not positive or null or undefined`;
//     }
//     if (typeof end !== "number" || typeof value !== "number") {
//         throw "provided variable is not a number";
//       }
//     if (value =="null")
//         return Array.apply(null, {length: end}).map(Number.call, Number);
//     else
//         return Array.apply(null, {length: end}).map(Number.call, Number);
    
// }
// console.log(range(4,2));
const countElements = function countElements(array){
    if (!array || !Array.isArray(array) || !array.length) {
        throw `Error: Either array does not exist, is not an array`;
    }
    result = { };
    for(var i = 0; i < array.length; ++i) {
        if(!result[array[i]])
        result[array[i]] = 0;
    ++result[array[i]];
    }
    return result;
    
} 
//console.log(countElements([13, '13', 13, 'hello', true, true]));
const isEqual = function isEqual(arrayOne, arrayTwo){
    if (!arrayOne || !Array.isArray(arrayOne) || !arrayOne.length) {
        throw `Error: Either array does not exist, is not an array`;
    }
    if (!arrayTwo || !Array.isArray(arrayTwo) || !arrayTwo.length) {
        throw `Error: Either array does not exist, is not an array`;
    }
    if(arrayOne.length !== arrayTwo.length)
        return false;
    for(var i = arrayTwo.length; i--;) {
        if(arrayOne[i] !== arrayTwo[i])
            return false;
    }

    return true;
}

module.exports={
    head:head,
    last:last,
    range:range,
    remove:remove,
    countElements:countElements,
    isEqual:isEqual,
}