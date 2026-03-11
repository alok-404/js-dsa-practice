//2d aray
// let arr = [[1,5,26],[45,64,6],[5,6,4]]

// for(let i = 0 ; i<arr.length; i++){
//     for(let j = 0; j < arr[i].length ; j++){
//         process.stdout.write(`${arr[i][j]} `)
//     }
//     console.log();

// }

//2d array user se input lenge
// let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter the size of an Array "))

// let arr = new Array(size);
// for(let i = 0 ; i<arr.length ; i++){
// let InnerArraySize = Number(prompt("Enter the Inner size "))

//     arr[i] = new Array(InnerArraySize)
// }
// // console.log(arr);

// for(let i = 0 ; i<arr.length;i++){
//     for(let j = 0 ; j<arr[i].length;j++){
//         arr[i][j]=Number(prompt("Enter Element "))
//     }
// }
// for(let i = 0 ; i<arr.length;i++){
//     for(let j = 0 ; j<arr[i].length;j++){
//       process.stdout.write(`${arr[i][j]} `)
//     }
//     console.log();
// }

//3d array print

// let arr = [
//   [
//     [1, 5, 26],
//     [4, 5, 6],
//   ],
//   [
//     [1, 5, 26],
//     [4, 5, 6],
//   ],
//   [
//     [1, 5, 26],
//     [4, 5, 6],
//   ],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for(let k = 0 ; k<arr[i][j].length ; k++){
//         process.stdout.write(`${arr[i][j][k]} `);
//     }
//   }
//   console.log();
// }

let arr = [
  [1, 5, 26],
  [45, 64, 6],
  [5, 6, 4],
];

let leftSum = 0,
  rightSum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i === j) leftSum += arr[i][j];//is,e arr[i] = arr[j] value compare krega like 25=25 hai ya nahi but i=j index ki value uthaygea
    if (i + j === arr.length - 1) rightSum += arr[i][j]; //yahan if conditon lagi kyoki else if check he nhi krega kyoki ek he condition check htoi h 
  }
}
console.log(leftSum);
console.log(rightSum);
