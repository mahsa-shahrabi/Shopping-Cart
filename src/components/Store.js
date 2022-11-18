import React, {useContext} from 'react';
import styles from './Store.module.css';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Components
import Product from './shared/Product';

const Store = () => {
    const products = useContext(ProductsContext);

    return (
        <div className={styles.container}>
            {products.map(item => <Product key={item.id} productData={item} />)}
        </div>
    );
};

export default Store;