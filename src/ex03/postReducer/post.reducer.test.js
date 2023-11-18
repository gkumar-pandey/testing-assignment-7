import postReducer from "./post.reducer";

describe("postReducer", () => {
  it("should return the initial state", () => {
    expect(postReducer(undefined, {})).toEqual({
      posts: [],
    });
  });

  it("should handle CREATE_POST action", () => {
    const action = {
      type: "CREATE_POST",
      payload: {
        id: 1,
        author: "John Doe",
        content: "This is a test post.",
      },
    };

    const expectedState = {
      posts: [
        {
          id: 1,
          author: "John Doe",
          content: "This is a test post.",
          likes: 0,
        },
      ],
    };

    expect(postReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle EDIT_POST action", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "John Doe",
          content: "Original content.",
          likes: 0,
        },
      ],
    };

    const action = {
      type: "EDIT_POST",
      payload: {
        id: 1,
        newContent: "Updated content.",
      },
    };

    const expectedState = {
      posts: [
        {
          id: 1,
          author: "John Doe",
          content: "Updated content.",
          likes: 0,
        },
      ],
    };

    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle DELETE_POST action", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "John Doe",
          content: "This post will be deleted.",
          likes: 0,
        },
      ],
    };

    const action = {
      type: "DELETE_POST",
      payload: {
        id: 1,
      },
    };

    const expectedState = {
      posts: [],
    };

    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LIKE_POST action", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "John Doe",
          content: "A post to be liked.",
          likes: 0,
        },
      ],
    };

    const action = {
      type: "LIKE_POST",
      payload: {
        id: 1,
      },
    };

    const expectedState = {
      posts: [
        {
          id: 1,
          author: "John Doe",
          content: "A post to be liked.",
          likes: 1,
        },
      ],
    };

    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle unknown action type", () => {
    const action = {
      type: "UNKNOWN_ACTION",
      payload: {},
    };

    const initialState = {
      posts: [],
    };

    expect(postReducer(initialState, action)).toEqual(initialState);
  });
});
