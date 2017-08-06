//Add a Todo Action Creator:
export const addTodoAction = (todo) => {
  console.log('YOU HAVE REACHED THE ACTION: ',todo);
  return {
    type: 'ADD_TODO',
    value: todo
  }
};
