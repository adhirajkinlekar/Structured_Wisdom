// Write two function to find the factorial of a number using Iteration and recursion


getFactorialViaRecursion = (number)=>{
    try {
        if (number === 0 || number === 1) return 1;
            
        return number * getFactorialViaRecursion(number - 1);
    }
    catch(err){
        console.log(err.message)
    }
};


getFactorialViaInteration = (number)=>{
    try {
        let factorial = 1;

        if (number === 0 || number === 1) return factorial;
        
        for(let i = number; i>=1; i--){ 
            factorial = factorial * i
        };

        return factorial
    }
    catch(err){
        console.log(err.message)
    }
};

console.log({recursionFactorial: getFactorialViaRecursion(5)})
console.log({interationFactorial: getFactorialViaInteration(5)})