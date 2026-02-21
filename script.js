// // Q2. Find the second largest number in an array

// let arr = [3, 100, 2, 8, 27, 95, 90, 200];

// if (arr.length < 2) {
//   alert("array must be at least of 2 elements");
// }

// let largest, secondLargest;

// if (arr[0] > arr[1]) {
//   largest = arr[0];
//   secondLargest = arr[1];
// } else {
//   largest = arr[1];
//   secondLargest = arr[0];
// }

// // console.log(largest);
// // console.log(secondLargest);

// for (let i = 2; i < arr.length; i++) {
//   let num = arr[i];
//   // console.log(num);
//   if (num > largest) {
//     secondLargest = largest;
//     largest = num;
//   } else if (num > secondLargest) {
//     secondLargest = num;
//   }
// }
// console.log("largest number is =" + largest);
// console.log("Second largest number is =" + secondLargest);

// Q4. Check if a string is palindrome

// Input: "madam" → true
// Input: "hello" → false

let string = "racecar";
// let reverse = "";

// for (let i = string.length-1; i >= 0; i--) {
// //   console.log(string[i]);
//   reverse += string[i]
// }

// if(string === reverse) console.log(`${string} is Palindrome`);
// else console.log(`${string} is not Palindrome`);

// for(let i = 0; i<=string.length-1 ; i++){
//     // console.log(string[i]);
//     for(let j = string.length-1; j>=0; j--){
//     // console.log(string[j]);
//       if(string[i] === string[j]) console.log(`${string} is Palindrome`)
//     else console.log(`${string} is not Palindrome`);
//     }

// }

// let i = 0;
// let j = string.length - 1;
// isPalindrome = true;

// while (i < j) {
//     if(string[i] !== string[j]){
//         isPalindrome = false;
//         break
//     }
//   i++;
//   j--;
// }

// if (isPalindrome) console.log(`${string} is Palindrome`);
// else console.log(`${string} is not Palindrome`);

// Q3. Count frequency of each character

// Input: "aabbbcc"
// Output:

// {
//   a: 2,
//   b: 3,
//   c: 2
// }

// let nf = "aabbbcdddee";
// let obj = {};

// let i = 0;

// while (i <= nf.length - 1) {
//   let char = nf[i];

//   if (obj[char]) {
//     obj[char]++; //if already exist toh incriment krna
//   } else {
//     obj[char] = 1; // first time hai toh initialize
//   }
//   i++;
// }
// console.log(obj);

// i=0
// while (i <= nf.length - 1) {
//   if (obj[nf[i]] === 1) {
//     console.log("First non-repeating:", nf[i]);
//     break;
//   }
//   i++;
// }
