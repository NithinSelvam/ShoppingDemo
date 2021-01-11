import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../model/actions/CartActions'
import styles from '../Styles.less'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { PanelMenu  } from 'primereact/panelmenu'

export const Home = (props) => {

    const handleClick = (id) => {
        props.addToCart(id);
    }
    const footer = id =>
        <span>
            <Button label="Add to cart" icon="pi pi-times" className="p-button-secondary p-ml-2" onClick={() => handleClick(id)} />
        </span>
    let items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    }
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        }
    ];

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
            <div className={styles.sideMenu}>
            <div className="card">
                <PanelMenu model={items} style={{ width: '22rem' }}/>
            </div>
            </div>
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