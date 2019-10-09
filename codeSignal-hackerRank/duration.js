//https://www.codewars.com/kata/human-readable-duration-format/train/javascript

const Assert = require('assert');

function formatDuration (seconds) {
let Y = 0;
let M = 0;
let D = 0;
let h = 0;
let m = 0;
let s = 0;

s = seconds % 60
console.log(s);

}

Assert(formatDuration(1), "1 second");
Assert(formatDuration(62), "1 minute and 2 seconds");
Assert(formatDuration(120), "2 minutes");
Assert(formatDuration(3600), "1 hour");
Assert(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
