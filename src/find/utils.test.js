import { findLongestWord, findLastNegativeNumber } from "./utils";

describe("find utils", () => {
  describe("findLongestWord", () => {
    it("Find longest word in a sentence", () => {
      const input = "The quick brown fox jumps over the lazy dog.";
      expect(findLongestWord(input)).toBe("quick");
    });
    it("Find longest word in a sentence with a single word", () => {
      const input = "Hello";
      expect(findLongestWord(input)).toBe("Hello");
    });
    it("Find longest word in an empty string", () => {
      expect(findLongestWord("")).toBeUndefined();
    });
    it("Check if the output is a string", () => {
      const input = "The quick brown fox jumps over the lazy dog.";
      expect(typeof findLongestWord(input)).toBe("string");
    });
  });

  describe("findLastNegativeNumber", () => {
    it("Find last negative number", () => {
      const input = [3, -7, -2, 9, -5];
      expect(findLastNegativeNumber(input)).toBe(-5);
    });
    it("Find last negative number in an array with no negative numbers", () => {
      const input = [3, 7, 2, 9, 5];
      expect(findLastNegativeNumber(input)).toBeUndefined();
    });
    it("Find last negative number in an array with decimal numbers", () => {
      const input = [3.5, -7.2, -2.1, 9.7, 5.3];
      expect(findLastNegativeNumber(input)).toBe(-2.1);
    });
    it("Check if the output is a number", () => {
      const input = [3, -7, -2, 9, -5];
      expect(typeof findLastNegativeNumber(input)).toBe("number");
    });
    it("Check if the function throws an error with invalid input", () => {
      expect(() => {
        findLastNegativeNumber("invalid");
      }).toThrow();
    });
  });
});
