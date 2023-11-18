import bookshelfReducer from "./bookshelf.reducer";

describe("bookshelfReducer", () => {
  it("should return the initial state", () => {
    expect(bookshelfReducer(undefined, {})).toEqual({
      books: [],
      categories: [],
    });
  });

  it("should add new book to the book array", () => {
    const action = {
      type: "ADD_BOOK",
      payload: {
        id: 1,
        title: "Test Book",
        author: "Test Author",
      },
    };

    const expectedState = {
      books: [
        {
          id: 1,
          title: "Test Book",
          author: "Test Author",
          category: null,
        },
      ],
      categories: [],
    };

    expect(bookshelfReducer(undefined, action)).toEqual(expectedState);
  });

  it("should add category to the category array", () => {
    const action = {
      type: "ADD_CATEGORY",
      payload: {
        id: 1,
        name: "Test Category",
      },
    };

    const expectedState = {
      books: [],
      categories: [
        {
          id: 1,
          name: "Test Category",
        },
      ],
    };

    expect(bookshelfReducer(undefined, action)).toEqual(expectedState);
  });

  it("should assign category ", () => {
    const initialState = {
      books: [
        {
          id: 1,
          title: "Test Book",
          author: "Test Author",
          category: null,
        },
      ],
      categories: [
        {
          id: 1,
          name: "Test Category",
        },
      ],
    };

    const action = {
      type: "ASSIGN_CATEGORY",
      payload: {
        bookId: 1,
        categoryId: 1,
      },
    };

    const expectedState = {
      books: [
        {
          id: 1,
          title: "Test Book",
          author: "Test Author",
          category: 1,
        },
      ],
      categories: [
        {
          id: 1,
          name: "Test Category",
        },
      ],
    };

    expect(bookshelfReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle unknown action type", () => {
    const action = {
      type: "UNKNOWN_ACTION",
      payload: {},
    };

    const initialState = {
      books: [],
      categories: [],
    };

    expect(bookshelfReducer(initialState, action)).toEqual(initialState);
  });
});
