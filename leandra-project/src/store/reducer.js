const initialState = {
  user: null,
  events: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_EVENTS":
      return { ...state, events: action.events };
    default:
      return state;
  }
};
export default reducer;
