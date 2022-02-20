const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

const caesarCipher = (str, shift) => {
  const findCode = (char) => {
    const position = char.charCodeAt(0) + (shift % 26);
    return position > 122 ? position - 26 : position;
  };
  const shiftChar = (char) => String.fromCharCode(findCode(char));
  const isLetter = (char) => /[a-zA-Z]/.test(char);
  const isCapitalLetter = (letter) => letter.toUpperCase() === letter;
  return str
    .split("")
    .map((char) =>
      isLetter(char)
        ? isCapitalLetter(char)
          ? shiftChar(char.toLowerCase()).toUpperCase()
          : shiftChar(char)
        : char
    )
    .join("");
};

const analyzeArray = (arr) => {
  return {
    average: arr.reduce((total, cur) => total + cur) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
