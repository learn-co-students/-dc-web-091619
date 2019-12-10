import paintingsData from "../paintings.json";
import {combineReducers} from 'redux'

//only going to worry about how searchText changes
const searchTextReducer = (oldState="", action) => {
  switch(action.type){
    case "CHANGE_SEARCH":
      return action.payload
    default:
      return oldState
  }
}

//only going to worry about how paintings changes
const paintingsReducer = (oldState=paintingsData.paintings, action) => {
  switch(action.type){
    case "UPDATE_PAINTING_INFO":
      return oldState.map( (p) => {
        console.log(action.payload)
        if(action.payload.paintingId === p.id){
          return {
            ...p,
            title: action.payload.title,
            artist: {
              ...p.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          }
        }
        return p
      })
    default:
      return oldState
  }
}

//map the key in state: its reducer function
let rootReducer = combineReducers({
  paintings: paintingsReducer,
  searchText: searchTextReducer
})

export default rootReducer
