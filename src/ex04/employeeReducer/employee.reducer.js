export const initialState = {
  employees: [],
  filterBy: "",
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "UPDATE_SALARY":
      return {
        ...state,
        employees: state.employees.map((employee) => {
          return employee.id === action.payload.id
            ? {
                ...employee,
                salary: action.payload.updatedSalary,
              }
            : employee;
        }),
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload.id
        ),
      };
    case "FILTER_EMPLOYEES":
      const filteredEmployees = state.employees.filter(
        (item) => item.role === action.payload
      );

      return {
        filterBy: action.payload,
        employees: filteredEmployees,
      };

    default:
      return {
        ...state,
      };
  }
}

export default employeeReducer;
