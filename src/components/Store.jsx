import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../context/ProductContext';
import Loading from '../shared/Loading';
import Product from '../shared/Product';

import styles from '../Styles/Store.module.css'

const Store = () => {
    const { pagination, someData, setPage, page } = useContext(ProductsContext);


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
                            <button onClick={() => {
                                setPage(pervState => {
                                    if ( pervState - 1 >= 1) {
                                        return pervState - 1
                                    }
                                    else{
                                        return pervState
                                    }
                                })
                            }} className={styles.arrow}> {"<"} </button>
                            {pagination.map(num => <div onClick={pageHandler} className={styles.num} style={page == num ? { backgroundColor: "#16246d", color: "#fff" } : { backgroundColor: "#fff", color: "#16246d" }} key={num}>{num}</div>)}
                            <button onClick={() => {
                                setPage(pervState => {
                                    if (pervState + 1 <= pagination.length) {
                                        return pervState + 1
                                    }
                                    else{
                                        return pervState
                                    }
                                })
                            }} className={styles.arrow}> {">"} </button>
                        </div>
                    </>
            }
        </>
    );
};

export default Store;