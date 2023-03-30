import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { quantityCount } from '../Helper/function';


import styles from '../Styles/CartProducts.module.css'

const CartProduct = ({ data, dispatch, state }) => {

    return (
        <div className={styles.cartContainer}>
            <div className={styles.imageBox}>
                <img className={styles.cartImage} src={data.images[0]} alt="image" loading='lazy'/>
            </div>
            {/* <div className={styles.textBox}> */}
            <div className={styles.textContainer}>
                <h2 className={styles.cartTitle}>{data.title}</h2>
                <p className={styles.cartPrice}>{data.price} $</p>
            </div>
            {/* </div> */}
            <div className={styles.btns}>
                {
                    quantityCount(state, data.id) > 1 ?
                        <button className={styles.btn} onClick={() => dispatch({ type: "DECREASE", payload: data })}> - </button> :
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}><BsTrash /></button>
                }
                <div className={styles.count}>
                    <p>{data.quantity}</p>
                </div>
                <button className={styles.btn} onClick={() => dispatch({ type: "INCREASE", payload: data })}> + </button>
            </div>
        </div>
    );
};

export default CartProduct;