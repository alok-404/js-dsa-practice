//Q1. Find the largest number in an Array?

//code-

const arr = [3, 100, 2, 8, 27, 95, 90, 200];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if(max<arr[i]){
    max = arr[i]
  }
}
console.log(`Largest number in the array is ${max}`);


// Q2. Find the second largest number in an array

//code

const array = [3, 100, 2, 8, 27, 95, 90, 200,199]

if(array.length < 2){
  alert("Array Must be atleast of 2 character")
}
let largest , secondLargest;

if(array[0]>array[1]){
  largest = array[0]
  secondLargest = array[1]
}
else{
  largest = array[1]
  secondLargest = array[0]
}

for(let i = 2; i< array.length ; i++){
  let num = array[i]
  if(largest< num){
    secondLargest = largest;
    largest = num
  }
  else if(secondLargest < num){
    secondLargest = num
  }
}

console.log(`Second Largest no. is ${secondLargest}`);

