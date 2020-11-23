const Assert = require('assert')

const testData =
  `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`

function assertCoordinates (input, expectedResult) {
  Assert.deepStrictEqual(parseCoordinates(input), expectedResult)
}

// #region cmopleted tests
assertCoordinates(null, [''])
assertCoordinates('1, 1',
  [
    [1, 1]
  ])

assertCoordinates(
  `1, 1
1, 6`,
  [
    [1, 1],
    [1, 6]
  ])

assertCoordinates(
  `1, 1
1, 6
8, 3`,
  [
    [1, 1],
    [1, 6],
    [8, 3]
  ])
// #endregion

function parseCoordinates (str) {
  if (!str) return ['']
  return str.split(/\n/).map(e => e.split(', ').map(e => +e))
}
