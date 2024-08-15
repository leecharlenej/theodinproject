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

  function multiplyByThree(num) {
    if (num%2===0){
        return num*3
    }
  }

  y = arrOne.map(multiplyByThree);
  console.log(y);

