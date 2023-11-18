import eventReducer from "./event.reducer";

describe("eventReducer", () => {
  it("should add new events", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "Conference",
          date: "2023-01-20",
          attendees: ["John Doe", "Jane Doe", "Bob Smith"],
        },
      ],
    };
    const action = {
      type: "CREATE_EVENT",
      payload: {
        id: 2,
        name: "Workshop",
        date: "2023-02-15",
        attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
      },
    };
    const expectedState = {
      events: [
        {
          id: 1,
          name: "Conference",
          date: "2023-01-20",
          attendees: ["John Doe", "Jane Doe", "Bob Smith"],
        },
        {
          id: 2,
          name: "Workshop",
          date: "2023-02-15",
          attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
        },
      ],
    };
    expect(eventReducer(initialState, action)).toEqual(expectedState);
  });
  it("should remove event from events list", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "Conference",
          date: "2023-01-20",
          attendees: ["John Doe", "Jane Doe", "Bob Smith"],
        },
        {
          id: 2,
          name: "Workshop",
          date: "2023-02-15",
          attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
        },
      ],
    };
    const action = {
      type: "CANCEL_EVENT",
      payload: {
        id: 1,
        name: "Conference",
        date: "2023-01-20",
        attendees: ["John Doe", "Jane Doe", "Bob Smith"],
      },
    };
    const expectedState = {
      events: [
        {
          id: 2,
          name: "Workshop",
          date: "2023-02-15",
          attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
        },
      ],
    };
    expect(eventReducer(initialState, action)).toEqual(expectedState);
  });
  it("should add attendee to the specific event ", () => {
    const inititalState = {
      events: [
        {
          id: 1,
          name: "Conference",
          date: "2023-01-20",
          attendees: ["John Doe", "Jane Doe", "Bob Smith"],
        },
        {
          id: 2,
          name: "Workshop",
          date: "2023-02-15",
          attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
        },
      ],
    };
    const action = {
      type: "ADD_ATTENDEE",
      payload: {
        eventId: 1,
        attendee: "Gautam shekhar",
      },
    };
    const updatedState = eventReducer(inititalState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "Conference",
          date: "2023-01-20",
          attendees: ["Gautam shekhar", "John Doe", "Jane Doe", "Bob Smith"],
        },
        {
          id: 2,
          name: "Workshop",
          date: "2023-02-15",
          attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
        },
      ],
    });
  });
  it("should remove attendee", () => {
    const inititalState = {
      events: [
        {
          id: 1,
          name: "Conference",
          date: "2023-01-20",
          attendees: ["Gautam shekhar", "John Doe", "Jane Doe", "Bob Smith"],
        },
        {
          id: 2,
          name: "Workshop",
          date: "2023-02-15",
          attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
        },
      ],
    };
    const action = {
      type: "REMOVE_ATTENDEE",
      payload: {
        eventId: 1,
        attendee: "Gautam shekhar",
      },
    };
    const updatedState = eventReducer(inititalState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "Conference",
          date: "2023-01-20",
          attendees: ["John Doe", "Jane Doe", "Bob Smith"],
        },
        {
          id: 2,
          name: "Workshop",
          date: "2023-02-15",
          attendees: ["Alice Johnson", "Charlie Brown", "David Williams"],
        },
      ],
    });
  });
});
