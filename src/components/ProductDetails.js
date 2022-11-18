import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductDetails.module.css';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const ProductDetails = () => {
    const params = useParams();
    const data = useContext(ProductsContext);
    const product = data[params.id - 1];
    const {image, title, description, category, price} = product;
    return (
        <div className={styles.container}>
            <img src={image} alt="product's image" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.price}>
                    <span>{price} $</span>
                    <Link to='/products'>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;