import React, { useEffect, useState, createContext } from 'react';
import { getAllProducts, getSomeProducts } from '../services/api';


export const ProductsContext = createContext();

const ProductContext = ({children}) => {

    const [allData, setAllData] = useState([]);
    const [someData, setSomeData] = useState([]);
    const [pagination, setPagination ] = useState([])
    const [page , setPage] = useState(1);
    useEffect(() => {
        const temp = []
            const index = Math.ceil(allData.length / 20 );
            for(let i=1; i<= index; i++){
                temp.push(i);
            }
            setPagination(temp);
    }, [allData])
    
    useEffect(() => {
        const fetchData = async () => {
            setAllData(await getAllProducts());
        }
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            setSomeData(await getSomeProducts(page))
        }
        fetchData()
    }, [page])

    return (
        <ProductsContext.Provider value={{pagination, someData, setPage}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContext;