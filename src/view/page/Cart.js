import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../../model/actions/CartActions'
import Recipe from '../component/Recipe'
import styles from '../Styles.less'

export const Cart = (props) => {

    //to remove the item completely
    const handleRemove = (id) => {
        props.removeItem(id);
    }
    //to add the quantity
    const handleAddQuantity = (id) => {
        props.addQuantity(id);
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id) => {
        props.subtractQuantity(id);
    }
    let addedItems = props.items.length ?
        (
            props.items.map(item => {
                return (

                    <li className={styles.collectionItemAvatar} key={item.id}>
                        <div className={styles.iteImg}>
                            <img src={item.img} alt={item.img} className="" />
                        </div>

                        <div className={styles.itemDesc}>
                            <span className={styles.title}>{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <div className={styles.addRemove}>
                                <Link to="/cart"><i className={styles.materialIcons} onClick={() => { handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                <Link to="/cart"><i className={styles.materialIcons} onClick={() => { handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={() => { handleRemove(item.id) }}>Remove</button>
                        </div>

                    </li>

                )
            })
        ) :

        (
            <p>Nothing.</p>
        )
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <h5>You have ordered:</h5>
                <ul className={styles.collection}>
                    {addedItems}
                </ul>
            </div>
            <Recipe />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)