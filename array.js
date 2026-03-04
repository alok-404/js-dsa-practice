// //Q1. Find the largest number in an Array?

// //code-

// const arr = [3, 100, 2, 8, 27, 95, 90, 200];

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if(max<arr[i]){
//     max = arr[i]
//   }
// }
// console.log(`Largest number in the array is ${max}`);

// // Q2. Find the second largest number in an array

// //code

// const array = [3, 100, 2, 8, 27, 95, 90, 200,199]

// if(array.length < 2){
//   alert("Array Must be atleast of 2 character")
// }
// let largest , secondLargest;

// if(array[0]>array[1]){
//   largest = array[0]
//   secondLargest = array[1]
// }
// else{
//   largest = array[1]
//   secondLargest = array[0]
// }

// for(let i = 2; i< array.length ; i++){
//   let num = array[i]
//   if(largest< num){
//     secondLargest = largest;
//     largest = num
//   }
//   else if(secondLargest < num){
//     secondLargest = num
//   }
// }

// console.log(`Second Largest no. is ${secondLargest}`);

//11:20 am - 12:00 pe break 12:03 p3 start
function twoSum(num, target) {
  let map = {};
  for (let i = 0; i < num.length; i++) {
    let needed;
    needed = target - num[i];

    if (needed in map) {
      return [map[needed], i];
    } else {
      map[num[i]] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
//i = 0;
//needed = target = num[i];
// needed = 6 - 3 = 3
// check krega 3 map mn hai = answer is no ..toh else part chlega and map mn store hoga {3:0} thn i++;

//i = 1;
//needed = target = num[i];
// needed = 6 - 2 = 4
// check krega 4 map mn hai = answer is no ..toh else part chlega and map mn store hoga {2:1} thn i++;

//i = 2;
//needed = target = num[i];
// needed = 6 - 4 = 2
// check krega 2 map mn hai = answer is yes ..toh return krdo map[needed] = 1 , 2, 


function bestBuyAndSell (arr){
  let minPrice = arr[0];
  let maxProfit = 0;

  for(let i = 1; i<arr.length; i++){
    let profit = arr[i]- minPrice;

    if(profit > maxProfit){
      maxProfit = profit;
    }

    if(arr[i] < minPrice){
      minPrice = arr[i]
    }
  }
return maxProfit

}

console.log(bestBuyAndSell([5,4,3,2,10]))
console.log(bestBuyAndSell([2,1,2,1,0,1,2]))

// minPrice = 2 , maxProfit = 0
//p = 1-2 = -1
// maxProfit = 0;
// 1<2 minPrice = 1
// 2-1 = 1
// maxProfit = 1
// 2<1..no minprice = 1
// 1-1 = 0
// maxProfit = 1
// 1<1 .. no minprice = 1
// 0-1 = -1
// maxProfit = 1
// 0 < 1 → minPrice = 0
//1-0 = 0
//maxProfit = 1
//1 < 0 → no
//i = 6 → price = 2
// profit = 2 - 0 = 2
// maxProfit = 2

// loop finish toh return hoga maxProfit = 2

//sum of array;
let arr = [10,20,30,40,50,4,6,186,1,2]
let sum = 0;
for(let i = 0 ; i<arr.length ; i++){
  sum = sum + arr[i];
}

console.log(sum);


// find Greatest Element And Index

let max = arr[0];
let index = 0
for(let i = 1; i<arr.length; i++){
  let num = arr[i];
  if(max < num){
    max = num;
    index = i
  }
}

console.log(max,index);

let min = arr[0];
for(let i = 1; i<arr.length; i++){
  let num = arr[i];
  if(min > num){
    min = num;
  }
}

console.log(min);


// function calculateSumAndMean(arr, n) {
    // Write your logic here
//     let sum = 0;
//     for(let i = 0; i<arr.length ; i++){
//         sum = sum + arr[i]
//     }
//     let mean = (sum / n).toFixed(1)
//     return[sum , mean]
// }

// module.exports = { calculateSumAndMean };

const array = new Array(5).fill(0);

for (let i = 0; i < 5; i++) {
    console.log(array[i] + " ");
}

let x = 50;

if (x <= 50) {
    if (x === 50) {
        console.log("x is 50");
    } else {
        console.log("x is less than 50");
    }
} else {
    console.log("x is greater than 50");
}