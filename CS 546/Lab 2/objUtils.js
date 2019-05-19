const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

const extend = function extend(...args) {
    if(args.length < 2)
        throw `Error less than two arguments`;
    for(var i=0;i< args.length;i++){
        if(typeof args[i] != 'object' || !args)
        throw `Error undefined or not an object`;
    }
    
    output = {};
    for (var obj in args) {
        
        for (var k in args[obj]) {
            
            if (output.hasOwnProperty(k))
                continue;
            else {
                output[k] = args[obj][k];
            }
        }
    }

    return output;
}

 
// const extend = function extend(...args){
//     console.log(args.length)
//     if(args.length < 2)
//         throw `Error less than two arguments`;
    
//     if(typeof args != 'object' || !args)
//         throw `Error undefined or not an object`;
    
//     output = {};
//     var k=0;
//     for (var i = 0; i< args.length; i++){
//         for (var j =0; j< Object.keys(args[i]).length-1; j++){
//             output[k]= args[i].key ;
            
//         }  
//     }  
     
//     return output;    
// }


const smush = function smush(...args){
    if(args.length<2)
        throw "error:there must be atleast two objects in args"
    obj={}
    for(let i=0;i<args.length;i++){
        if(args[i]==undefined)
            throw "error:one of arguments doesnt exist"
        else if(typeof(args[i])!="object"||!args[i] instanceof Object||Array.isArray(args[i]))
            throw "error:one of the argument or both are not of type object"
        for(let att in args[i]){
            obj[att]=args[i][att]
        }
    }
    return obj
}
console.log(smush({ x: 2, y: 3}, {x: 5, z: 4}))

const mapValues = function mapValues(myObject, f1){
    if (!myObject || !f1)
        throw `Error: Either the function or object does not exist.`;
    if(typeof myObject != 'object' || typeof f1 != 'function'){
        throw `Error: Either Object type is not an object and function type is not function`;
    }
    Object.keys(myObject).map(function(key, index) {
    myObject[key] = f1(myObject[key]);
    });
    return myObject;
}

module.exports={
    first,
    second,
    third,
    extend:extend,
    smush:smush,
    mapValues:mapValues
}
