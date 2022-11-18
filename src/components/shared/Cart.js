import React, { useContext } from 'react';
import styles from './Cart.module.css';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Functions
import { shorten } from '../../helpers/functions';

// Icons
import trashIcon from '../../assets/icons/trash.svg';

const Cart = (props) => {
    const {image, title, price, quantity} = props.data;
    const {dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <img src={image} alt="product" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttons}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;