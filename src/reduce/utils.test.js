import { sumNestedArrays, calculateFactorial } from "./utils";

describe("reduce test", () => {
  describe("sumNestedArrays", () => {
    it("Sum numbers in a nested array", () => {
      const input = [[1, 2], [3, 4, 5], [6]];
      expect(sumNestedArrays(input)).toBe(21);
    });
    it("Sum numbers in an empty nested array", () => {
      expect(sumNestedArrays([])).toBe(0);
    });
    it("Ensure original array remains unchanged", () => {
      const input = [[1, 2], [3, 4, 5], [6]];
      const originalArr = [...input];
      sumNestedArrays(input);
      expect(input).toEqual(originalArr);
    });
    it("Check if the output is a number", () => {
      const input = [[1, 2], [3, 4, 5], [6]];
      expect(typeof sumNestedArrays(input)).toBe("number");
    });
  });
  describe("calculateFactorial", () => {
    it("Calculate factorial of 0", () => {
      expect(calculateFactorial(0)).toBe(1);
    });
    it("Calculate factorial of 1", () => {
      expect(calculateFactorial(1)).toBe(1);
    });
    it("Calculate factorial of 5", () => {
      expect(calculateFactorial(5)).toBe(120);
    });
    it("Calculate factorial of 10", () => {
      expect(calculateFactorial(10)).toBe(3628800);
    });
    it("Check if the output is a number", () => {
      expect(typeof calculateFactorial(5)).toBe("number");
    });
    it("Handle negative input", () => {
      expect(() => {
        calculateFactorial(-5);
      }).toThrow();
    });
  });
});
