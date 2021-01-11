
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'


const cartReducer = (cartItems = {}, action) => {
    console.log("cartReducer", cartItems)
    console.log("cartReducer 2", action)
    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        console.log("------------------")
        let addedItem = cartItems.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = cartItems.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...cartItems,
                total: cartItems.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = cartItems.total + addedItem.price

            return {
                ...cartItems,
                addedItems: [...cartItems.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = cartItems.addedItems.find(item => action.id === item.id)
        let new_items = cartItems.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = cartItems.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...cartItems,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        console.log("b------------------")
        let addedItem = cartItems.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = cartItems.total + addedItem.price
        return {
            ...cartItems,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        console.log("c------------------")
        let addedItem = cartItems.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = cartItems.addedItems.filter(item => item.id !== action.id)
            let newTotal = cartItems.total - addedItem.price
            return {
                ...cartItems,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = cartItems.total - addedItem.price
            return {
                ...cartItems,
                total: newTotal
            }
        }
    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...cartItems,
            total: cartItems.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...cartItems,
            total: cartItems.total - 6
        }
    }

    else {
        return cartItems
    }
}



    export default cartReducer
