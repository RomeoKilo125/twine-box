const Assert = require('assert');

function findDup(a) {
let minIndex = a.length
  for (i = 0; i < a.length; i++) {
    if (a.indexOf(a[i], i + 1) < minIndex && a.indexOf(a[i], i + 1) > 0) {
      minIndex = a.indexOf(a[i], i + 1);
    }
  }
  a.push(-1);
  return a[minIndex];
}


Assert.strictEqual(findDup([2, 1, 3, 5, 3, 2]), 3, 1);
Assert.strictEqual(findDup([2, 4, 3, 5, 1]), -1, 2);
Assert.strictEqual(findDup([1]), -1, 3);
Assert.strictEqual(findDup([2, 2]), 2, 4);
Assert.strictEqual(findDup([2, 1]), -1, 5);
Assert.strictEqual(findDup([2, 1, 3]), -1, 6);
Assert.strictEqual(findDup([2, 3, 3]), 3, 7);
Assert.strictEqual(findDup([3, 3, 3]), 3, 8);
Assert.strictEqual(findDup([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]), 6, 9);
Assert.strictEqual(findDup([10, 6, 8, 4, 9, 1, 7, 2, 5, 3]), -1, 10);
Assert.strictEqual(findDup([1, 1, 2, 2, 1]), 1, 11);
