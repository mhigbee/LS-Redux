const addtodoReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {
        value: action.value,
        completed: false
      }]
    default: return state;
  }
}

export default addtodoReducer;
