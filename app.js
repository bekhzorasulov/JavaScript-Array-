// Array misolar

// 1 misol
// let n = prompt("son kiriting");
// let counter = 1;
// let result = [];
// while (result.length < n) {
//     if (counter % 2 == 1) {
//         result.push(counter);
//     }
//     counter++;
// }
// console.log(result);

// 2 misol
// let arr = [4, 5, 7, 8, 6, 9];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         result.push(arr[i]);
//     }
// }
// console.log(result.reverse());

// 3 misol
// const arr = [4, 5, 7, 8, 6, 9];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i], arr[arr.length - (i + 1)]);
// }
// console.log(result);

// 4 misol
// const arr = [1, 6, 9, 5, 8, 10, 15];
// const K = 2;
// const L = 5;
// let count = 0;
// for (let i = K; i <= L; i++) {
//     count += arr[i];
// }
// console.log(count);

// 5 misol
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//     }
// }
// console.log(result);

// 6 misol
// let arr = [1, 2, 3, 4, 15, 6, 3];
// let max = 0;
// let min = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (min == 0) {
//         min = arr[i];
//     } else if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// const minIndex = arr.indexOf(min);
// const maxIndex = arr.indexOf(max);
// arr[minIndex] = max;
// arr[maxIndex] = min;
// console.log(arr);