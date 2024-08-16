// To run JS file: node learning-js-obj.js

arrOne = [1,2,3,4];

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }

x = sumOfTripledEvens(arrOne);
console.log(x);

// Use filter, map, reduce.

function isEven (num) {
  if(num%2===0) {
      return true;
  };
}

function multiplyByThree (num) {
    return num*3;
}


function combinedFunctionsForTriple (arr) {
    //return ((arr.filter(isEven)).map(multiplyByThree)).reduce((total,currentItem) => {return total+currentItem;},0);
    return arr
    .filter(isEven)
    .map(multiplyByThree)
    .reduce((acc,curr) => acc+curr);
  
}

y = combinedFunctionsForTriple(arrOne)
console.log(y);

