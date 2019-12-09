let reducer = (oldState = {count: 111}, action) => {
  console.log("inside reducer, updating state")
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
