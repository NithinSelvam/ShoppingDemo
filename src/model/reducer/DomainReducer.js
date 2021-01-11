import { combineReducers } from 'redux'
import CartReducer from './CartReducer'

const DomainReducer = combineReducers({
    cartItems: CartReducer
})

export default DomainReducer