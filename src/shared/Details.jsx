import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../services/api';
import styles from '../Styles/Details.module.css'
import Loading from './Loading';
import { CartContexts } from '../context/CartContext';
import { isInCart, quantityCount } from '../Helper/function';
import { BsTrash } from 'react-icons/bs';
const Details = () => {

    const { state, dispatch } = useContext(CartContexts)
    const param = useParams().id
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            setData(await getProduct(param));
        }
        fetchData();
    }, [])
    return (
        <>
            {
                !Object.keys(data).length ? <Loading />
                    :
                    <div className={styles.detailsContainer}>
                        <div className={styles.container}>
                            <div className={styles.image}>
                                <img src={data.images} alt="" />
                            </div>
                            <div className={styles.text}>
                                <h2 className={styles.title}>{data.title}</h2>
                                <p className={styles.desc}>{data.description}</p>
                                <p className={styles.price}><span className={styles.priceTitle}>Price:</span> {data.price} $</p>
                                <div className={styles.btns}>
                                    <Link to="/products">Back</Link>
                                    {
                                        isInCart(state, data.id) ?
                                            <div className={styles.btnsGroup}>
                                                {
                                                    quantityCount(state, data.id) > 1 ?
                                                        <button className={styles.minus} onClick={() => dispatch({ type: "DECREASE", payload: data })}>-</button>
                                                        :
                                                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}><BsTrash /></button>
                                                }
                                                {
                                                    quantityCount(state, data.id) > 0 ? <span>{quantityCount(state, data.id)}</span> : <></>
                                                }
                                                <button className={styles.plus} onClick={() => dispatch({ type: "INCREASE", payload: data })}>+</button>
                                            </div>
                                            :
                                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}>Add to Cart</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Details;