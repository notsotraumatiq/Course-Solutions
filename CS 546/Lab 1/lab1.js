const questionOne = function questionOne(arr) {
    // Implement question 1 here
    

    var x=0;
    for (var i=0;i<arr.length;i++){
        x = x + Math.pow(arr[i],2);
    }
    //console.log(x);
    return x;
    
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if (num<=0)
        return 0;
    if (num==1)
        return 1;
    
    return questionTwo(num-1) + questionTwo(num-2);
            
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    var j = new String();    
    var count=0;
    for (var i=0; i< text.length; i++){
        j = text.charAt(i);
        if( j=="a" || j== "e" || j== "i"|| j== "o"|| j=="u" ){
            count++;
        }
    }
    //console.log(count);
    return count;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num < 0)
        return NaN;
    if (num ==0 || num ==1)
       return 1;
    else 
        return num*questionFour(num-1);

}
module.exports = {
    firstName: "Atiq", 
    lastName: "Patel", 
    studentId: "10432883",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};