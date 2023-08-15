// Program to chack if the Number in even or odd
// Teke import to user
// const number = 33 ;

// if (number % 2 == 0) {
//     console.log("This number id even");
// }
// else{
//     console.log("This numbbr is odd");
// }


// Program to chack leap year
// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year %100) || (0 == year % 400)) {
//         console.log(year + " is a leap year");
//     }
//     else{
//         console.log(year + " is not a leap year");
//     }
// }

// const year = 2012;

// checkLeapYear(year);
////////
// let sum=0; 
// for( let i = 0; i<=3;i++){ 
// sum = sum + i; 
// console.log(sum);
// }

// function cubeNumber(number) {
//     if (typeof 'input' === number) {
//       return number ** 3;
//     } else {
//       return "Invalid input. Please provide a number.";
//     }
//   }

//   // Using the function
//   let input = 5;
//   let result = cubeNumber(number);
//   console.log(`Cube of ${number} is: ${result}`);

//   let text = "Hello";
//   let resultText = cubeNumber(text);
//   console.log(resultText);


// function sortMaker(arr) {
//   if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
//       arr.sort(function(a, b) {
//           return a - b;
//       });
//       return arr;
//   } else if (arr[0] === arr[1]) {
//       return "equal";
//   } else {
//       return "Invalid Input";
//   }
// }

// console.log(sortMaker([5, 3]));
// console.log(sortMaker([4, 4])); 
// console.log(sortMaker([6, -3]));
function canPay(changeArray, totalDue) {

  if (changeArray.length === 0) {
      return false;
  }
  const totalAmount = changeArray.reduce((sum, item) => sum + item, 0);
  return totalAmount >= totalDue;
}


const khuchraTaka = [1, 2, 5];
const chipPrice = 9;
console.log(canPay(khuchraTaka, chipPrice)); // true

const khuchraTaka2 = [1, 5, 5];
const chipPrice1= 12;
console.log(canPay(khuchraTaka2, chipPrice1));