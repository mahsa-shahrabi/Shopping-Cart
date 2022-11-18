import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from '../../assets/icons/shop.svg'

const Navbar = () => {
    const {state} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div>
                <Link to='/products' className={styles.productsLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to='/cart'><img src={shopIcon} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;