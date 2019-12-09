import {createStore} from 'redux'
import reducer from './reducer'

export default createStore(reducer)//reducer is invoked automatically for us

//let store = createStore(reducer)
//export default store
