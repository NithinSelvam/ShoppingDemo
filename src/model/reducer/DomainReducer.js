import { combineReducers } from 'redux'
import CartReducer from './CartReducer'

const DomainReducer = combineReducers({
    addedItems: CartReducer
})

export default DomainReducer