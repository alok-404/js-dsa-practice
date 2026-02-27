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

// function firstUniqChar(s) {
//   let obj = {};

//   for (i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   console.log(obj);

//  for (let j = 0; j < s.length; j++) {
//     let char = s[j];
//     if (obj[char] === 1) {
//         return char;
//     }
// }
// return null;
// }

// console.log
// (firstUniqChar("leetcode"));

//reverse a string

function reverseString(s) {
  if (s.length === 0) {
    return console.log("String is empty");
  }
  let reverse = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    reverse += char;
  }
  return reverse;
}
console.log(reverseString("Dil Maange more"));

//Move zeros (two pointer)

let arr = [0, 1, 0, 3, 12];
let insertPos = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] !== 0) {
    arr[insertPos] = arr[i];
    insertPos++;
  }
}

for (let i = insertPos; i < arr.length; i++) {
  arr[i] = 0;
}

console.log(arr);

function firstUniqChar(s) {
  let obj = {};

  for (let i = 0; i <= s.length - 1; i++) {
    let char = s[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  // console.log(obj);

  for (let j = 0; j <= s.length - 1; j++) {
    let char = s[j];
    if (obj[char] === 1) {
      return char;
    }
  }
}

console.log(firstUniqChar("leetcode"));

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // if(obj[char]){
    //   obj[char]++
    // }
    // else{
    //   obj[char] = 1;
    // }

    obj[char] = (obj[char] || 0) + 1;
  }
  // console.log(obj);

  for (let j = 0; j < t.length; j++) {
    let char2 = t[j];
    if (!obj[char2]) return false;
    obj[char2]--;
    if (obj[char2] < 0) return false;
  }
  // console.log(obj);

  return true;
}

console.log(isAnagram("listen", "silent")); //true hoga
console.log(isAnagram("rat", "car")); // false

function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      let top = stack[stack.length - 1];

      if (
        (char === ")" && top === "(") ||
        (char === "}" && top === "{") ||
        (char === "]" && top === "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("([{}])"));//true
console.log(isValid("([)]"));   // false
console.log(isValid("((("));    // false

