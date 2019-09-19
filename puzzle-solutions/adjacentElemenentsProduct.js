const Assert = require('assert');

/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer
The largest product of adjacent elements.
*/

function adjacentElementsProduct(inputArray) {

  let maxProd = Number.NEGATIVE_INFINITY

  for (i = 1; i < inputArray.length; i++) {
    let prod = inputArray[i] * inputArray[i-1]
    prod > maxProd ? maxProd = prod : ``;
  }

  return maxProd
}



Assert.strictEqual(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
Assert.strictEqual(adjacentElementsProduct([-1, -2]), 2);
Assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
Assert.strictEqual(adjacentElementsProduct([1, 2, 3, 0]), 6);
Assert.strictEqual(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
Assert.strictEqual(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
Assert.strictEqual(adjacentElementsProduct([4, 1, 2, 3, 1, 5]), 6);
Assert.strictEqual(adjacentElementsProduct([-23, 4, -3, 8, -12]), -12);
Assert.strictEqual(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
