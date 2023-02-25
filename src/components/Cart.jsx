import React, { useContext, useEffect, useState } from 'react';
import { CartContexts } from '../context/CartContext';
import CartProduct from '../shared/CartProduct';
import Swal from 'sweetalert2';
import styles from '../Styles/Cart.module.css'
import { Link } from 'react-router-dom';
const Cart = () => {

    const { state, dispatch } = useContext(CartContexts);
    const [isCheckout, setIsCheckout] = useState(false);
    const { selectedItems: data } = state;


    const checkoutHandler = () => {
        dispatch({ type: "CHECKOUT" })
    }

    useEffect(() => {
        if (state.checkout) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch({type: "CLEAR"})
            setIsCheckout(true)
        }
    }, [state])

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                <div className={styles.productsContainer}>
                    {data.map(cart => <CartProduct key={cart.id} data={cart} state={state} dispatch={dispatch} />)}
                </div>
                <div className={styles.checkoutContainer}>
                    {
                        isCheckout ?
                            <div className={styles.success}>
                                <h3>Checkout Successfully!</h3>
                                <Link className={styles.buyMore} to="/products" onClick={() => setIsCheckout(false)}>Buy More!</Link>
                            </div>
                            :
                            <>
                                <p className={styles.totalItem}><span className={styles.title}>Total Items:</span>‍{state.itemsCounter}</p>
                                <p className={styles.totalPayment}><span className={styles.title}>Total Payments:</span>‍ {state.total} $</p>
                                <div className={styles.btns}>
                                    <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                                    <button className={styles.checkout} onClick={checkoutHandler}>Checkout</button>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;