import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../../model/actions/CartActions'
import Recipe from '../component/Recipe'
import styles from '../Styles.less'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export const Cart = (props) => {

    const [cartAddedItems, setCartAddedItems] = useState('')
    //to remove the item completely
    const handleRemove = (item) => <Button onClick={() => props.removeItem(item.id)}>Remove</Button>
    //to add the quantity
    const handleAddQuantity = (item) => <Button onClick={() => props.addQuantity(item.id)}>+</Button>
    //to substruct from the quantity
    const handleSubtractQuantity = (item) => <Button onClick={() => props.subtractQuantity(item.id)}>-</Button>
    //To get the title
    const getTitle = (item) => <div><b>{item.title}</b></div>
    const descBodyTemplate = (item) => <div>{item.desc}</div>
    const priceBodyTemplate = (item) => <div>{item.price}</div>
    const getQuantity = (item) => <div>{item.quantity}</div>

    useEffect(() => {
        setCartAddedItems(props.addedItems.length ?
            (
                <div className="card">
                    <DataTable value={props.addedItems}>{/* header={header} footer={footer}> */}
                        <Column field="title" header="Name" body={getTitle}></Column>
                        <Column header="Subtract Quantity" body={handleSubtractQuantity}></Column>
                        <Column field="quantity" header="Quantity" body={getQuantity}></Column>
                        <Column header="Add Quantity" body={handleAddQuantity}></Column>
                        <Column header="Remove" body={handleRemove}></Column>
                        <Column field="desc" header="Description" body={descBodyTemplate}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    </DataTable>
                </div>

                // <li className={styles.collectionItemAvatar} key={item.id}>
                //     <div className={styles.iteImg}>
                //         <img src={item.img} alt={item.img} className="" />
                //     </div>

                //     <div className={styles.itemDesc}>
                //         <span className={styles.title}>{item.title}</span>
                //         <p>{item.desc}</p>
                //         <p><b>Price: {item.price}$</b></p>
                //         <p>
                //             <b>Quantity: {item.quantity}</b>
                //         </p>
                //         <div className={styles.addRemove}>
                //             <Link to="/cart"><i className={styles.materialIcons} onClick={() => { handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                //             <Link to="/cart"><i className={styles.materialIcons} onClick={() => { handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                //         </div>
                //         <button className="waves-effect waves-light btn pink remove" onClick={() => { handleRemove(item.id) }}>Remove</button>
                //     </div>

                // </li>

            ) : <p>Cart Empty</p>)
    },[props.total])
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <h5>You have ordered:</h5>
                <ul className={styles.collection}>
                    {cartAddedItems}
                </ul>
            </div>
            <Recipe />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: state.cartItems.items,
        addedItems: state.cartItems.addedItems,
        total: state.cartItems.total
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