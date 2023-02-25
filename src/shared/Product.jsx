import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {BsTrash} from 'react-icons/bs';
import { CartContexts } from '../context/CartContext';
import { isInCart, quantityCount } from '../Helper/function';
import styles from '../Styles/Product.module.css';

const Product = ({data}) => {

    const {state, dispatch} = useContext(CartContexts);

    return (
        <div className={styles.productContainer}>
            <div className={styles.imageContaienr}><img src={data.images[0]} alt="" /></div>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.price}>{data.price} $</p>
            <div className={styles.btns}>
                <Link to={`/products/${data.id}`}>Details</Link>
                {
                    isInCart(state , data.id)?
                    <div className={styles.btnsGroup}>
                        {
                            quantityCount(state, data.id) > 1?
                            <button className={styles.minus} onClick={()=> dispatch({type:"DECREASE", payload: data})}>-</button>
                            :
                            <button onClick={()=> dispatch({type:"REMOVE_ITEM", payload: data})}><BsTrash /></button>
                        }
                        {
                            quantityCount(state, data.id) > 0? <span>{quantityCount(state, data.id)}</span>: <></>
                        }
                        <button className={styles.plus} onClick={()=> dispatch({type:"INCREASE", payload: data})}>+</button>
                    </div>
                    :
                    <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;