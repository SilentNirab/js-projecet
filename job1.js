function cubeNumber(number) {
  if (typeof number === 'number') {
    return number ** 3;
  } else {
    return "Invalid input. Please provide a number.";
  }
}

let number = -4;
let result = cubeNumber(number);
console.log(result);
