import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("capitalize a string", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("reverse a string", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("calculations", () => {
  expect(calculator.add(3, 4)).toBe(7);
  expect(calculator.substract(5, 4)).toBe(1);
  expect(calculator.divide(12, 4)).toBe(3);
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("caesar cipher", () => {
  expect(caesarCipher("a", 1)).toBe("b");
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("DEF", 1)).toBe("EFG");
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("caesar", 4)).toBe("geiwev");
  expect(caesarCipher("z", 1)).toBe("a");
  expect(caesarCipher("hello world", 2)).toBe("jgnnq yqtnf");
  expect(caesarCipher("hello!", 1)).toBe("ifmmp!");
});

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
