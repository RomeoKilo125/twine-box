const Assert = require('assert');

function groupCheck(s) {
  if (s.length % 2 !== 0) {
    return false
  }

  let arr = s.split('');
  let openers = [];

  reOpen = /[\(\[\{]/;
  reClose = /[\)\]\}]/;

  for (i = 0; i < arr.length; i++) {
    if (reOpen.test(arr[i])) {
      openers.push(arr[i]);
    }
    if (reClose.test(arr[i])) {
      switch (arr[i]) {
        case ')':
          if (openers.pop() !== '(') {
            return false;
          }
          break;
        case ']':
          if (openers.pop() !== '[') {
            return false;
          }
          break;
        case '}':
          if (openers.pop() !== '{') {
            return false;
          }
          break;
        default:
      }
    }
  }
  return true;
}

// function groupCheck(s) {
//   var r = /\{\}|\[\]|\(\)/;
//   while (r.test(s))
//     s = s.replace(r, '');
//   console.log(s);
//   return !s.length;
// }

Assert(groupCheck("{[{}[]()[]{}{}{}{}{}{}()()()()()()()()]{{{[[[((()))]]]}}}}(())[[]]{{}}[][][][][][][]({[]})"));
