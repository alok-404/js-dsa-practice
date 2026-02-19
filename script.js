// Q1. Reverse a string without using .reverse()

// Input: "hello"
// Output: "olleh"

let string = "hello"

for(let i = string.length-1 ; i>=0;i--){
    console.log(string[i]);
}

// Q2. Find the second largest number in an array


let arr = [3, 100, 2, 8, 27, 95, 90, 200];

if (arr.length < 2) {
  alert("array must be at least of 2 elements");
}

let largest, secondLargest;

if (arr[0] > arr[1]) {
  largest = arr[0];
  secondLargest = arr[1];
} else {
  largest = arr[1];
  secondLargest = arr[0];
}

// console.log(largest);
// console.log(secondLargest);

for (let i = 2; i < arr.length; i++) {
  let num = arr[i];
  // console.log(num);
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest) {
    secondLargest = num;
  }
}
console.log("largest number is =" + largest);
console.log("Second largest number is =" + secondLargest);


