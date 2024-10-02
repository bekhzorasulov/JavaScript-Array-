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

// Array misolari
// 2 Qisim

// 1 misol
// let n = 5;
// let result = [];
// for (let i = 1; i <= n; i++) {
//     result.push(2 ** i);
// }
// console.log(result);

// 2 misol
// let n = 5;
// let a = 2;
// let b = 3;
// let result = [];
// result[0] = a;
// result[1] = b;
// for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let k = 0; k < result.length; k++) {
//         count += result[k];
//     }
//     result.push(count);
// }
// console.log(result);

// 3 misol
// let n = [1, 2, 3, 4, 5];
// let result = [];
// for (let i = 0; i < n.length; i++) {
//     result.unshift(n[i]);
// }
// console.log(result);

// 4 misol
// let arr = [4, 5, 7, 8, 6, 9];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         result.push(arr[i]);
//     }
// }
// console.log(result);

// 5 misol
// let arr = [4, 5, 7, 8, 6, 9];
// let result1 = [];
// let result2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         result2.push(arr[i]);
//     } else {
//         result1.push(arr[i]);
//     }
// }
// let result = result1.concat(result2.reverse());
// console.log(result);

// 6 misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }

// 7 misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = [];
// for (let i = arr.length - 2; i >= 0; i -= 2) {
//     result.push(arr[i]);
// }
// console.log(result.reverse());

// 8 misol
// let n = prompt("n sonini kiriting");
// let result = [];
// for (i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//         result.push(i);
//     }
// }
// for (i = 0; i < n; i++) {
//     if (i % 2 == 1) {
//         result.push(i);
//     }
// }
// for (i = n; i > 0; i--) {}
// console.log(result);

// 9 misol
// let n = prompt("n sonini kiriting");
// let result = [];
// for (i = 0; i < n; i++) {
//     if (i % 2 == 1) {
//         result.push(i);
//     }
// }
// for (i = n; i > 0; i--) {
//     if (i % 2 == 0) {
//         result.push(i);
//     }
// }
// console.log(result);

//  10 misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let n = arr.length;

// for (let i = 0; i < Math.ceil(n / 2); i++) {
//     if (i < n) {
//         console.log(arr[i]);
//     }
//     if (n - 1 - i > i) {
//         console.log(arr[n - 1 - i]);
//     }
// }