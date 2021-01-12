import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../model/actions/CartActions'
import styles from '../Styles.less'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { PrimeMenu } from '../component/panelMenu/primeMenu'

export const Home = (props) => {

    const handleClick = (id) => {
        props.addToCart(id);
    }
    const footer = id => {
        <span>
            <Button label="Add to cart" icon="pi pi-times" className="p-button-secondary p-ml-2" onClick={() => handleClick(id)} />
        </span>
    }

    let itemList = props.items.map(item => {
        return (
            <div className={styles.card} key={item.id}>
                <Card title={<img src={item.img} alt={item.title} />} subTitle={item.title} style={{ width: '19rem' }} className="ui-card-shadow" footer={footer(item.id)}>
                    <span className={styles.cardTitle}></span>
                    <div className={styles.cardontent}>
                        <div>{item.desc}</div>
                        <div><b>Price: {item.price}$</b></div>
                    </div>
                </Card>
            </div>
        )
    })

    return (

        <div className={styles.bodyContainer}>
            <PrimeMenu/>
            <div>
                <h3 className={styles.center}>Our items:</h3>
                <div className={styles.box}>
                    {itemList}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.cartItems.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)