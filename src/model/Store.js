import { createStore } from 'redux'
import DomainReducer from './reducer/DomainReducer'

const store = createStore(DomainReducer)

export default store