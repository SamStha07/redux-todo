const defaultState = {
  task: "",
};

const todoAddReducer = (state = defaultState, action) => {
  if (action.type === "todoAdd") {
    return { ...state, task: state.task };
  } else {
    return state;
  }
};

export default todoAddReducer;
