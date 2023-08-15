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

const firstInput = "JavaScript";
const secondInput = "java";

const result = matchFinder(firstInput, secondInput);
console.log("MatchFinder Result:", result);