(function() {
  // const primeChecker = {
  //   add(num1, num2) {
  //     if (typeof num1 !== "number") throw "Must provide a number";
  //     if (isNaN(num1)) throw "Must provide a number";
  //     if (typeof num2 !== "number") throw "Must provide a number";
  //     if (isNaN(num2)) throw "Must provide a number";

  //     return num1 + num2;
  //   },
  //   subtract(num1, num2) {
  //     if (typeof num1 !== "number") throw "Must provide a number";
  //     if (isNaN(num1)) throw "Must provide a number";
  //     if (typeof num2 !== "number") throw "Must provide a number";
  //     if (isNaN(num2)) throw "Must provide a number";

  //     return num1 - num2;
  //   },
  //   multiply(num1, num2) {
  //     if (typeof num1 !== "number") throw "Must provide a number";
  //     if (isNaN(num1)) throw "Must provide a number";
  //     if (typeof num2 !== "number") throw "Must provide a number";
  //     if (isNaN(num2)) throw "Must provide a number";

  //     return num1 * num2;
  //   },
  //   divide(num1, num2) {
  //     if (typeof num1 !== "number") throw "Must provide a number";
  //     if (isNaN(num1)) throw "Must provide a number";
  //     if (typeof num2 !== "number") throw "Must provide a number";
  //     if (isNaN(num2)) throw "Must provide a number";
  //     if (num2 <= 0) throw "Cannot divide by 0!";

  //     return num1 / num2;
  //   }
  // };

  // function operationStringToFunction(operation) {
  //   if (!operation) throw "No operation provided";

  //   const returnFunction = calculatorMethods[operation];

  //   if (returnFunction === undefined) throw "No such operation";

  //   return returnFunction;
  // }
  const primeChecker = {
    isPrime(numberr){
 //     numberr = numberr.replace(/[^0-9]/ig, "").toLowerCase();
 if (!numberr) 
  throw "No Number Given";
 if (typeof numberr == "undefined" || numberr == NaN) 
  throw "Wrong arguments try again";
 if (typeof numberr!= "number") 
  throw "The input is not a number" ;
 
  for(var i = 2; i < numberr; i++) {
      if(numberr % i === 0) {
          return false;
      }
  }
  return numberr > 1;
  }
}
  
  const staticForm = document.getElementById("static-form");

  if (staticForm) {
    // We can store references to our elements; it's better to
    // store them once rather than re-query the DOM traversal each time
    // that the event runs.
    const firstNumberElement = document.getElementById("number");
    // const secondNumberElement = document.getElementById("number2");
    // const operationElement = document.getElementById("operation");
 
    const errorContainer = document.getElementById("error-container");
    const errorTextElement = errorContainer.getElementsByClassName(
      "text-goes-here"
    )[0];
    function errorCheck (result){
      if(!result)
        throw "There is no input";
      
            
      if(result.length!= 0){
        const error = document.getElementById("error")
        error.className = "error-Container-hidden";  
      }
  
    }
    
    const resultContainer = document.getElementById("attempts");
    // const resultTextElement = resultContainer.getElementsByClassName(
    //   "text-goes-here"
    // )[0];
    
    // We can take advantage of functional scoping; our event listener has access to its outer functional scope
    // This means that these variables are accessible in our callback
    staticForm.addEventListener("submit", event => {
      event.preventDefault();

      try {
        // hide containers by default
        errorContainer.classList.add("hidden");
        // resultContainer.classList.add("hidden");

        // Values come from inputs as strings, no matter what :(
        const result = firstNumberElement.value;
      
        // const secondNumberValue = secondNumberElement.value;
        // const operationValue = operationElement.value;

        const parsedFirstNumberValue = parseInt(result);
        // const parsedSecondNumberValue = parseInt(secondNumberValue);
        // const operation = operationStringToFunction(operationValue);
        //console.log(parsedFirstNumberValue)
        const isPrimer = primeChecker.isPrime(parsedFirstNumberValue);
        //console.log(isPrimer)
        
        if(isPrimer){

          const output = document.createElement("p");
          const textOutput = document.createTextNode("The given number " + parsedFirstNumberValue + " is a prime.")
          output.appendChild(textOutput);
          
          output.className = output.className + "is-prime";
          console.log(output);
          resultContainer.appendChild(output);
          errorContainer.classList.add("hidden");
          errorTextElement.textContent = "";
        //  resultTextElement.textContent = "The result is " + result;
        //    resultContainer.classList.remove("hidden");
        }
        else {
          const output = document.createElement("p");
          const textOutput = document.createTextNode("The given number " + parsedFirstNumberValue + " is a not prime.")
          output.appendChild(textOutput);
          
          output.className = output.className + "not-prime";
          
          resultContainer.appendChild(output);
          errorContainer.classList.add("hidden");
          errorTextElement.textContent = "";
        //  resultTextElement.textContent = "The result is " + result;
        //  resultContainer.classList.remove("hidden");
        }
        
      
      } catch (e) {
        
        const message = typeof e === "string" ? e : e.message;
        errorTextElement.textContent = e;
        errorContainer.classList.remove("hidden");
      }
    });
  }
})();
