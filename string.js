// Q1. Reverse a string without using .reverse()

// Input: "hello"
// Output: "olleh"

let str = "hello"

for(let i = str.length-1 ; i>=0;i--){
    console.log(str[i]);
}

// Q4. Check if a string is palindrome

// Input: "madam" → true
// Input: "hello" → false

let string = "madam";
let reverse = "";

for (let i = string.length-1; i >= 0; i--) {
//   console.log(string[i]);
  reverse += string[i]
}

if(string === reverse) console.log(`${string} is Palindrome`);
else console.log(`${string} is not Palindrome`);