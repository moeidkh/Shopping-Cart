import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import styles from '../Styles/NavBar.module.css';
import { CartContexts } from '../context/CartContext';

const NavBar = () => {
    const loc = useLocation();
    const {state} = useContext(CartContexts);

    return (
        <nav className={styles.navContainer}>
            <ul className={styles.container}>
                <Link to="/products" style={loc.pathname === "/products" || loc.pathname === "/" ? { borderBottom: "1px solid #fff" } : { border: "none" }}>Products</Link>
                <Link to="/cart">
                    <div className={styles.iconContainer}>
                        <GiShoppingCart className={styles.icon} />
                        <span className={styles.numIcon}>{state.itemsCounter}</span>
                    </div>
                </Link>
            </ul>
        </nav>
    );
};

export default NavBar;