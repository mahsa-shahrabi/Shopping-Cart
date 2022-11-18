import React, {useState, useEffect} from 'react';

// api
import { getProducts } from '../services/api';

export const ProductsContext = React.createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setProducts(await getProducts());
        }
        fetchAPI();
    }, [])

    return (
        <div>
            <ProductsContext.Provider value={products}>
                {props.children}
            </ProductsContext.Provider>
        </div>
    );
};

export default ProductContextProvider;