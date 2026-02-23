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

// Q-remove duplicates from string:

//----------------Approach 1----------------

let inp = "programMING"
inp = inp.toLowerCase()
let result = ""

for(let i = 0; i<inp.length; i++){
  let char = inp[i];
  // console.log(char);
  
  if(!result.includes(char)){
    result += char    
  }
}
console.log(result);

//-----------version 2 -------
let result2 = ""

let seen = {}

for(let i = 0; i<inp.length; i++){
  let char = inp[i];

  if(!seen[char]){
    seen[char] = true;
    result2+=char
  }
}
console.log(seen);


//Q check vowel inside a input

let count = 0;

for(let i = 0 ; i<inp.length ; i++){
  let char = inp[i];

  if(char === "a" || char === "e" || char === "i" || char === "o" ||char === "u"){
    count ++
  }
}
console.log(`count = ${count}`);


//Q what is inp is "ProgRAmMiNG"

//---approach is simple we tranform whole inp in lowercase at first
