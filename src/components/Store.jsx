import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContext';
import { getAllProducts, getSomeProducts } from '../services/api';
import Loading from '../shared/Loading';
import NavBar from '../shared/NavBar';
import Product from '../shared/Product';

import styles from '../Styles/Store.module.css'
import Cart from './Cart';

const Store = () => {
    const {pagination, someData, setPage} = useContext(ProductsContext);
    

    const pageHandler = event => {
        setPage(event.target.innerHTML)
    }

    return (
        <>
            {
                !someData.length && !pagination.length ? <Loading />
                    :
                    <>
                        <div className={styles.storeContainer}>
                            {someData.map(prod => <Product data={prod} key={prod.id} />)}
                        </div>
                        <div className={styles.numContainer}>
                            {pagination.map(num => <div onClick={pageHandler} className={styles.num} key={num}>{num}</div>)}
                        </div>
                    </>
            }
        </>
    );
};

export default Store;