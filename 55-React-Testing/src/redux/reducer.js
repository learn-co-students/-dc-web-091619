import {combineReducers} from 'redux';

const reducerAction = (state = [], action) => { 
  switch (action.type) {
      case 'ADD_BAND':
        const band = { id: Math.random(), name: action.name };
        let test = [...state, band] ;
        return test
       
      case 'DELETE_BAND':
        const bands = state.filter(band => band.id !== action.id);
        console.log(bands)
        return bands;
      default:
        return state;
    }
  };


  const reducers = combineReducers({
    myBands: reducerAction
})

export default reducers;