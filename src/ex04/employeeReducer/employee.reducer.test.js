import employeeReducer from "./employee.reducer";

describe("employeeReducer", () => {
  it("should add new employee", () => {
    const initialState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 40000 },
      ],
      filterBy: "",
    };
    const action = {
      type: "ADD_EMPLOYEE",
      payload: {
        id: 2,
        name: "Aankur",
        role: "android developer",
        salary: 30000,
      },
    };
    const updatedState = employeeReducer(initialState, action);
    const expectedState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 40000 },
        { id: 2, name: "Aankur", role: "android developer", salary: 30000 },
      ],
      filterBy: "",
    };
    expect(updatedState).toEqual(expectedState);
  });
  it("should update salary of employee", () => {
    const initialState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 30000 },
      ],
      filterBy: "",
    };
    const action = {
      type: "UPDATE_SALARY",
      payload: {
        id: 1,
        updatedSalary: 40000,
      },
    };

    const updatedState = employeeReducer(initialState, action);

    const expectedState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 40000 },
      ],
      filterBy: "",
    };
    expect(updatedState).toEqual(expectedState);
  });
  it("should remove employee", () => {
    const initialState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 40000 },
        { id: 2, name: "Aankur", role: "android developer", salary: 30000 },
      ],
      filterBy: "",
    };
    const action = {
      type: "REMOVE_EMPLOYEE",
      payload: {
        id: 2,
        name: "Aankur",
        role: "android developer",
        salary: 30000,
      },
    };
    const expectedState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 40000 },
      ],
      filterBy: "",
    };
    expect(employeeReducer(initialState, action)).toEqual(expectedState);
  });
  it("should filter employees based on their role", () => {
    const initialState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 40000 },
        { id: 2, name: "Aankur", role: "android developer", salary: 30000 },
      ],
      filterBy: "",
    };
    const action = {
      type: "FILTER_EMPLOYEES",
      payload: "frontend developer",
    };
    const expectedState = {
      employees: [
        { id: 1, name: "gautam", role: "frontend developer", salary: 40000 },
      ],
      filterBy: "frontend developer",
    };
    expect(employeeReducer(initialState, action)).toEqual(expectedState);
  });
});
