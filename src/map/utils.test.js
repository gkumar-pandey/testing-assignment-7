import { capitalizeValues, findDuplicates } from "./utils";

describe("Map utils", () => {
  describe("capitalizeValues", () => {
    it("Capitalize all strings in the array", () => {
      const input = ["apple", "banana", "cherry"];
      const output = ["Apple", "Banana", "Cherry"];
      expect(capitalizeValues(input)).toEqual(output);
    });
    it("Handle empty input array", () => {
      const input = [];
      const output = [];
      expect(capitalizeValues(input)).toEqual(output);
    });
    it("Capitalize strings with spaces", () => {
      const input = ["hello world", "goodbye space"];
      const output = ["Hello world", "Goodbye space"];
      expect(capitalizeValues(input)).toEqual(output);
    });
    it("Original array remains unchanged", () => {
      const input = ["abc", "def"];
      const originalArr = [...input];
      capitalizeValues(input);
      expect(input).toEqual(originalArr);
    });
    it("Capitalize strings with special characters", () => {
      const input = ["!@#", "$%^"];
      const output = ["!@#", "$%^"];
      expect(capitalizeValues(input)).toEqual(output);
    });
    it("Capitalize and check mixed case strings", () => {
      const input = ["loRem", "IpSum", "DoLor"];
      const output = ["Lorem", "Ipsum", "Dolor"];
      expect(capitalizeValues(input)).toEqual(output);
    });
  });
  describe("findDuplicates", () => {
    it("Find duplicates in an array", () => {
      const input = [1, 2, 3, 2, 4, 5, 3, 6, 7];
      const output = [2, 3];
      expect(findDuplicates(input)).toEqual(output);
    });
    it("Handle array with no duplicates", () => {
      const input = [9, 8, 7, 6, 5, 4, 3, 2, 1];
      const output = [];
      expect(findDuplicates(input)).toEqual(output);
    });
    it("Find duplicates with negative numbers", () => {
      const input = [1, -2, 3, -2, 4, 5, 3, -6, 7];
      const output = [-2, 3];
      expect(findDuplicates(input)).toEqual(output);
    });
    it("Find duplicates with floating-point numbers", () => {
      const input = [1.5, 2.3, 1.5, 4.8, 2.3];
      const output = [1.5, 2.3];
      expect(findDuplicates(input)).toEqual(output);
    });
    it("Handle empty input array", () => {
      const input = [];
      const output = [];
      expect(findDuplicates(input)).toEqual(output);
    });
  });
});
