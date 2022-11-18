import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css'

// Context
import { CartContext } from '../../context/CartContextProvider';

// Functions
import { shorten, isInCart, quantityCount } from '../../helpers/functions';

// Icons
import trashIcon from '../../assets/icons/trash.svg'

const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={productData.image} alt="product" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.buttonContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})} className={styles.smallButton}><img src={trashIcon} alt="trash" className={styles.trashIcon} /></button>}
                    {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: productData})} className={styles.smallButton}>-</button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.quantity}>{quantityCount(state, productData.id)}</span> }
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type: "INCREASE", payload: productData})} className={styles.smallButton}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to cart</button>
                    }   
                </div>
            </div>
        </div>
    );
};

export default Product;