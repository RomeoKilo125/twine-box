const Assert = require(`assert`)

/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

    For sequence = [1, 3, 2, 1], the output should be
    almostIncreasingSequence(sequence) = false.

    There is no one element in this array that can be removed in order to get a strictly increasing sequence.

    For sequence = [1, 3, 2], the output should be
    almostIncreasingSequence(sequence) = true.

    You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer sequence

    Guaranteed constraints:
    2 ≤ sequence.length ≤ 105,
    -105 ≤ sequence[i] ≤ 105.

    [output] boolean
        Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/

function almostIncreasingSequence (arr) {
  let less = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] <= 0) {
      less++
    }
  }

  return less <= 1
}

Assert.strictEqual(almostIncreasingSequence([1, 3, 2, 1]), false, `1`)
Assert.strictEqual(almostIncreasingSequence([1, 3, 2]), true, `2`)
Assert.strictEqual(almostIncreasingSequence([1, 2, 1, 2]), false, `3`)
Assert.strictEqual(almostIncreasingSequence([1, 4, 10, 4, 2]), false, `4`)
Assert.strictEqual(almostIncreasingSequence([10, 1, 2, 3, 4, 5]), true, `5`)
Assert.strictEqual(almostIncreasingSequence([1, 1, 1, 2, 3]), false, `6`)
Assert.strictEqual(almostIncreasingSequence([0, -2, 5, 6]), true, `7`)
Assert.strictEqual(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]), false, `8`)
Assert.strictEqual(almostIncreasingSequence([40, 50, 60, 10, 20, 30]), false, `9`)
Assert.strictEqual(almostIncreasingSequence([1, 1]), true, `10`)
Assert.strictEqual(almostIncreasingSequence([1, 2, 5, 3, 5]), true, `11`)
Assert.strictEqual(almostIncreasingSequence([1, 2, 5, 5, 5]), false, `12`)
Assert.strictEqual(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1]), false, `13`)
Assert.strictEqual(almostIncreasingSequence([1, 2, 3, 4, 3, 6]), true, `14`)
Assert.strictEqual(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]), true, `15`)
Assert.strictEqual(almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]), true, `16`)
Assert.strictEqual(almostIncreasingSequence([3, 5, 67, 98, 3]), true, `17`)
