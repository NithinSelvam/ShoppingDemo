import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../model/actions/CartActions'
import styles from '../Styles.less'

export const Home = (props) => {

    const handleClick = (id) => {
        props.addToCart(id);
    }

    let itemList = props.items.map(item => {
        return (
            <div className={styles.card} key={item.id}>
                <div className={styles.cardImage}>
                    <img src={item.img} alt={item.title} />
                    <span className={styles.cardTitle}>{item.title}</span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { handleClick(item.id) }}><i className={styles.materialIcons}>add</i></span>
                </div>

                <div className={styles.cardontent}>
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>

        )
    })

    return (
        <div className={styles.container}>
            <h3 className={styles.center}>Our items</h3>
            <div className={styles.box}>
                {itemList}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.addedItems.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)