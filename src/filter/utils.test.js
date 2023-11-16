import { filterByProperty, filterUniqueStrings } from "./utils";

describe("filter utils", () => {
  describe("filterUniqueStrings", () => {
    it("Filters out duplicate strings", () => {
      const input = ["apple", "banana", "cherry", "apple", "date", "banana"];
      const output = ["apple", "banana", "cherry", "date"];
      expect(filterUniqueStrings(input)).toEqual(output);
    });
    it("Handles empty input array", () => {
      const input = [];
      const output = [];
      expect(filterUniqueStrings(input)).toEqual(output);
    });
    it("Handles input with all unique strings", () => {
      const input = ["one", "two", "three"];
      const output = ["one", "two", "three"];
      expect(filterUniqueStrings(input)).toEqual(output);
    });
    it("Handles input with one repeated string", () => {
      const input = ["apple", "apple", "apple"];
      const output = ["apple"];
      expect(filterUniqueStrings(input)).toEqual(output);
    });
    it("Checks if the output array contains only unique strings", () => {
      const input = ["apple", "banana", "cherry", "apple", "date", "banana"];
      const outputArr = ["apple", "banana", "cherry", "date"];
      expect(filterUniqueStrings(input)).toEqual(outputArr);
    });
    it("Checks if the output array length is correct", () => {
      const input = ["apple", "banana", "cherry", "apple", "date", "banana"];
      expect(filterUniqueStrings(input)).toHaveLength(4);
    });
    it("Checks if the function throws an error with invalid input", () => {
      expect(() => {
        filterUniqueStrings("invalid");
      }).toThrow();
    });
  });
  describe("filterByProperty", () => {
    it("Filters objects with specified property", () => {
      const input = [
        { name: "apple", color: "red" },
        { color: "yellow" },
        { name: "cherry", color: "red" },
      ];
      const property = "name";
      expect(filterByProperty(input, property)).toEqual([
        { name: "apple", color: "red" },
        { name: "cherry", color: "red" },
      ]);
    });
    it("Handles empty input array", () => {
      expect(filterByProperty([], "name")).toEqual([]);
    });
    it("Handles objects with property having falsy values", () => {
      const input = [
        { name: "apple", color: "red" },
        { size: 0 },
        { name: "cherry", color: "red" },
      ];
      const property = "size";
      expect(filterByProperty(input, property)).toEqual([{ size: 0 }]);
    });
    it("Checks if the output array contains only objects with the specified property", () => {
      const input = [
        { name: "apple", color: "red" },
        { color: "yellow" },
        { name: "cherry", color: "red" },
      ];
      const property = "name";
      const output = filterByProperty(input, property);
      expect(output.every((obj) => obj.hasOwnProperty("name"))).toBe(true);
    });
    it("Checks if the function throws an error with invalid input", () => {
      expect(() => {
        filterByProperty("invalid", "name");
      }).toThrow();
    });
  });
});
