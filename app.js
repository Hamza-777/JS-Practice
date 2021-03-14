// $$$$$$$$$$$ Eloquent JavaScript $$$$$$$$$$$

// ==============================================
// Basic Problem 1 (Chess Board of Required Size)
// ==============================================

// let width = prompt("Enter width: ");
// let height = prompt("Enter height: ");
// const ch1 = '#';
// const ch2 = ' ';
// let result1 = '';
// let result2 = '';

// if (width == '0' || height == '0') {
//     console.log('boooooooooo....');
// } else {
//     for (let i = 0; i < Number(width); i++) {
//         if (i % 2 == 0) {
//             result1 += ch1;
//             result2 += ch2;
//         } else {
//             result1 += ch2;
//             result2 += ch1;
//         }
//     }

//     for (let i = 0; i < Number(height); i++) {
//         if (i % 2 == 0) {
//             console.log(result1);
//         } else {
//             console.log(result2);
//         }
//     }
// }

// ===============================================================================================
// Basic Problem 2 (Sequence of Additions & Multiplication to find a given target starting from 1)
// ===============================================================================================

// let target = prompt("Set a target value: ");

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) ||
//                 find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }

// console.log(findSolution(target));

// ================================================
// Basic Problem 3 (Recursion to find odd and even)
// ================================================

// let number = Number(prompt("Enter a number: "));

// function isEven(number) {
//     if (number === 0) {
//         return 'Even';
//     } else if (number === 1 || number === -1) {
//         return 'Odd';
//     } else {
//         if (number > 1) {
//             return isEven(number - 2);
//         } else if (number < -1) {
//             return isEven(number + 2);
//         }
//     }
// }

// console.log(isEven(number));

// ================================
// Basic Problem 4 (Sum of a Range)
// ================================

// function range(start, end, step = 1) {
//     let arr = [];
//     if (start > end) {
//         for (let i = start; i > end - 1; i = i + step) {
//             arr.push(i);
//         }
//     } else {
//         for (let i = start; i < end + 1; i = i + step) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
//     console.log(step);
//     return arr;
// }

// function sum(arr) {
//     let result = 0;
//     for (let num of arr) {
//         result += num;
//     }

//     return result;
// }

// console.log(sum(range(10, 0, -3)));

// ==================================================
// Basic Problem 5 (Program to convert Array to List)
// ==================================================

// function arrToList(arr) {
//     let list;
//     if (arr.length == 0) {
//         return null;
//     } else if (arr.length == 1) {
//         return { data: arr[0], rest: null };
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             arr[i] = { data: arr[i], rest: null };
//         }
//         for (let i = arr.length - 1; i > 0; i--) {
//             arr[i - 1].rest = arr[i];
//         }
//         list = arr[0];
//         return list;
//     }
// }

// ============================================================================
// Basic Problem 6 (Program to convert List to Array and some helper functions)
// ============================================================================

// Looping method

// function listToArr(list) {
//     let arr = [];
//     let temp = list;
//     if (temp.length == 0) {
//         return [];
//     } else {
//         while (temp.rest) {
//             arr.push(temp.data);
//             temp = temp.rest;
//         }
//         arr.push(temp.data);
//         return arr;
//     }
// }

// Recursive Method

// let arr = [];

// function listToArr(list) {
//     if (list.rest == null) {
//         arr.push(list.data);
//         return arr;
//     } else {
//         arr.push(list.data);
//         return listToArr(list.rest);
//     }
// }

// Function to add an element at the start of the list

// function prepend(element, list) {
//     element = { data: element, rest: null };
//     if (list == null) {
//         list = element;
//     } else {
//         element.rest = list;
//         list = element;
//     }
//     return list;
// }

// Function to return the data at the given position

// function nthTerm(list, position) {
//     let counter = 0;
//     let temp = list;
//     if (temp == null) {
//         return undefined;
//     } else {
//         while (temp.rest) {
//             if (counter == position) {
//                 return temp.data;
//             } else if (counter != position && temp.rest == null) {
//                 return undefined;
//             } else {
//                 temp = temp.rest;
//                 counter++;
//             }
//         }
//     }
// }

// console.log(nthTerm(arrToList([]), 0));