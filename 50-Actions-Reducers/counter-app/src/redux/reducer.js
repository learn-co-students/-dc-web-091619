let reducer = (oldState = {count: 111, age: 30}, action) => {
  console.log("State: ", oldState, "Action: ", action)
  switch(action.type){
    case "COUNT_INCREMENT":
      return {count: oldState.count + action.payload}
    case "COUNT_DECREMENT":
      return {count: oldState.count - action.payload}
    default:
      return oldState
  }
}

export default reducer
