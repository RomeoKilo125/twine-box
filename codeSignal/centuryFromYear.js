const Assert = require('assert');

function centuryFromYear(year) {
  return Math.ceil(year/100)
}


Assert.strictEqual(centuryFromYear('45'), 1);
