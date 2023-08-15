function sortMaker(arr) {

    if (arr[0] === arr[1]) {
      return "equal";
    }
    else if ((arr[0] < 0) || (arr[1] < 0)) {
      return "Invalid Input";
    }
    else if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
      arr.sort((a, b) => b - a);
      return arr;
    }
    else {
      return "Invalid Input";
    }
}
  
  console.log(sortMaker([2, 3]));
  console.log(sortMaker([4, 2]));
  console.log(sortMaker([4, 4]));
  console.log(sortMaker([1, 2]));
  console.log(sortMaker([4, -2])); 

  function cubeNumber(number) {
    if (typeof number === 'number') {
      return number ** 3;
    } else {
      return "Invalid input. Please provide a number.";
    }
}


function matchFinder(string1, string2) {
    if ((!string1 || !string2) || (typeof string1 !== 'string' || typeof string2 !== 'string')) {
        return "Both input strings must not be empty. MatchFinder operation not possible.";
    }
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}


function sortMaker(arr) {
    if (arr[0] === arr[1]) {
      return "equal";
    }
    else if ((arr[0] < 0) || (arr[1] < 0)) {
      return "Invalid Input";
    }
    else if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
      arr.sort((a, b) => b - a);
      return arr;
    }
    else {
      return "Invalid Input";
    }
}


function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
  
    const output = `Street: ${street}\nHouse: ${house}\nSocity: ${society}`;
    return output;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return false;
    }
    const totalAmount = changeArray.reduce((sum, item) => sum + item, 0);
    return totalAmount >= totalDue;
  }