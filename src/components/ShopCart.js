import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopCart.module.css';

// Context
import { CartContext } from '../context/CartContextProvider';

// Components
import Cart from './shared/Cart';

const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            <div className={styles.payment}>
                {
                    state.itemsCounter > 0 && 
                    <div>
                        <p><span>Total Items: </span>{state.itemsCounter}</p>
                        <p><span>Total Payments: </span>{state.total} $</p>
                        <div className={styles.paymentButtons}>
                            <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                            <button onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                        </div>
                    </div>
                }

                {
                    state.checkout && 
                    <div className={styles.checkout}>
                        <h3>Checked Out Successfully</h3>
                        <Link to='/products'>Buy More</Link>
                    </div>
                }

                {
                    !state.checkout && state.itemsCounter === 0 && 
                    <div className={styles.checkout}>
                        <h3>Want to Buy?</h3>
                        <Link to='/products'>Go to Shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;