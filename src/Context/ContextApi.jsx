/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const apiData = createContext();

const ContextApi = ({ children }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setData(res.data.products))
    }, []);

    return (
        <>
            <apiData.Provider value={data}>
                {children}
            </apiData.Provider>
        </>
    );
};

export { apiData, ContextApi }
