const initial_state = [

];

export default function logReducer(state = initial_state, action) {
  console.log("reduser", action);
  switch (action.type) {

  case "@TasksTypes.js/GET_TASKS":
      return action.payload;
    default:
      return state;
  }
}
