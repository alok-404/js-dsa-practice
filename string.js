// Q1. Reverse a string without using .reverse()

// Input: "hello"
// Output: "olleh"

let str = "hello";

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

// Q4. Check if a string is palindrome

// Input: "madam" → true
// Input: "hello" → false
//         By Reverse Method

let string = "madam";
let reverse = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverse += string[i];
}

if (string === reverse) console.log(`${string} is Palindrome`);
else console.log(`${string} is not Palindrome`);

//            BY SINGLE LOOP

let word = "racecar";

let i = 0;
let j = word.length - 1;
let isPalindrome = true;

while (i < j) {
  if (word[i] !== word[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPalindrome) console.log(`${word} is Palindrome`);
else console.log(`${word} is not Palindrome`);

//  Q3. Count frequency of each character and also find the first non repated character

// Input: "aabbbccdee"
// Output:

// {
//   a: 2,
//   b: 3,
//   c: 2
// }

let abc = "aabbbccdee";
let obj = {};
let k = 0;

for (k = 0; k < abc.length; k++) {
  let char = abc[k];
  if (obj[char]) {
    obj[char]++;
  } else {
    obj[char] = 1;
  }
}
console.log(obj);

//find the first non repated character
k = 0;

while(k < abc.length-1){
    if (obj[abc[k]] === 1) {
    console.log(`${abc[k]} is first non  repreated number`)
    break;
    }
    k++;
}

