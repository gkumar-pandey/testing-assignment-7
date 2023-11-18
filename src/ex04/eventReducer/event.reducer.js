export const initialState = {};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case "CANCEL_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload.id),
      };
    case "ADD_ATTENDEE":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.eventId
            ? {
                ...event,
                attendees: [action.payload.attendee, ...event.attendees],
              }
            : event
        ),
      };
    case "REMOVE_ATTENDEE":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.eventId
            ? {
                ...event,
                attendees: event.attendees.filter(
                  (attendee) =>
                    attendee.toLowerCase() !==
                    action.payload.attendee.toLowerCase()
                ),
              }
            : event
        ),
      };
    default:
      return {
        ...state,
      };
      break;
  }
}

export default eventReducer;
