// function isValid(s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];

//     // If opening bracket → push
//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     }
//     // Else it must be closing
//     else {
//       if (stack.length === 0) {
//         return false;
//       }

//       let top = stack[stack.length - 1];

//       if (
//         (char === ")" && top === "(") ||
//         (char === "}" && top === "{") ||
//         (char === "]" && top === "[")
//       ) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// let a = (isValid("([{}])"));
// console.log(a); // true
// console.log(isValid("([)]"));   // false
// console.log(isValid("((("));    // false

function firstUniqChar(s) {
  let obj = {};

  for (i = 0; i < s.length; i++) {
    let char = s[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  console.log(obj);

 for (let j = 0; j < s.length; j++) {
    let char = s[j];
    if (obj[char] === 1) {
        return char;
    }
}
return null;
}

console.log
(firstUniqChar("leetcode"));
