// // function isValid(s) {
// //   let stack = [];

// //   for (let i = 0; i < s.length; i++) {
// //     let char = s[i];

// //     // If opening bracket → push
// //     if (char === "(" || char === "{" || char === "[") {
// //       stack.push(char);
// //     }
// //     // Else it must be closing
// //     else {
// //       if (stack.length === 0) {
// //         return false;
// //       }

// //       let top = stack[stack.length - 1];

// //       if (
// //         (char === ")" && top === "(") ||
// //         (char === "}" && top === "{") ||
// //         (char === "]" && top === "[")
// //       ) {
// //         stack.pop();
// //       } else {
// //         return false;
// //       }
// //     }
// //   }

// //   return stack.length === 0;
// // }

// // let a = (isValid("([{}])"));
// // console.log(a); // true
// // console.log(isValid("([)]"));   // false
// // console.log(isValid("((("));    // false

// // function firstUniqChar(s) {
// //   let obj = {};

// //   for (i = 0; i < s.length; i++) {
// //     let char = s[i];
// //     if (obj[char]) {
// //       obj[char]++;
// //     } else {
// //       obj[char] = 1;
// //     }
// //   }
// //   console.log(obj);

// //  for (let j = 0; j < s.length; j++) {
// //     let char = s[j];
// //     if (obj[char] === 1) {
// //         return char;
// //     }
// // }
// // return null;
// // }

// // console.log
// // (firstUniqChar("leetcode"));

// //reverse a string

// function reverseString(s) {
//   if (s.length === 0) {
//     return console.log("String is empty");
//   }
//   let reverse = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     let char = s[i];
//     reverse += char;
//   }
//   return reverse;
// }
// console.log(reverseString("Dil Maange more"));

// //Move zeros (two pointer)

// let arr = [0, 1, 0, 3, 12];
// let insertPos = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] !== 0) {
//     arr[insertPos] = arr[i];
//     insertPos++;
//   }
// }

// for (let i = insertPos; i < arr.length; i++) {
//   arr[i] = 0;
// }

// console.log(arr);

// function firstUniqChar(s) {
//   let obj = {};

//   for (let i = 0; i <= s.length - 1; i++) {
//     let char = s[i];
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   // console.log(obj);

//   for (let j = 0; j <= s.length - 1; j++) {
//     let char = s[j];
//     if (obj[char] === 1) {
//       return char;
//     }
//   }
// }

// console.log(firstUniqChar("leetcode"));

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   let obj = {};
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     // if(obj[char]){
//     //   obj[char]++
//     // }
//     // else{
//     //   obj[char] = 1;
//     // }

//     obj[char] = (obj[char] || 0) + 1;
//   }
//   // console.log(obj);

//   for (let j = 0; j < t.length; j++) {
//     let char2 = t[j];
//     if (!obj[char2]) return false;
//     obj[char2]--;
//     if (obj[char2] < 0) return false;
//   }
//   // console.log(obj);

//   return true;
// }

// console.log(isAnagram("listen", "silent")); //true hoga
// console.log(isAnagram("rat", "car")); // false

// function isValid(s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];

//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//     } else {
//       if (stack.length === 0) return false;

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

// console.log(isValid("([{}])"));//true
// console.log(isValid("([)]"));   // false
// console.log(isValid("((("));    // false

// function containsDuplicate(a){
// let obj = {}

// for(let i = 0 ; i<a.length ; i++){
//   let char = a[i]

//   if(char in obj){
//    return true
//   }
//   else{
//     obj[char] = true
//   }
// }
// console.log(obj);

// return false
// }
// console.log(containsDuplicate([1,2,3,4,false,false]))

function twoSum(num, target) {
  let obj = {};//7
  for (let i = 0; i < num.length; i++) {
    let needed;
    needed = target - num[i];
    // console.log(needed);
    if (needed in obj) {
      return [obj[needed], i];
    } else {
      obj[num[i]] = i;
      console.log(obj);
      
    }
  }
}

// console.log(twoSum([3, 4, 5, 6], 10));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));


function longestString(s) {
  let left = 0;
  let maxLen = 0;
  let map = {};

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    // If character seen before and inside current window
    if (char in map) {
      left = Math.max(left, map[char] + 1);
    }

    // Update last seen index
    map[char] = right;

    // Update max length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestString("abcabcbb")); // 3
console.log(longestString("bbbbb"));    // 1
console.log(longestString("pwwkew"));   // 3
console.log(longestString("abba"));     // 2