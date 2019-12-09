import {createStore} from 'redux'
import reducer from './reducer'

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//reducer is invoked automatically for us

//let store = createStore(reducer)
//export default store
