/* eslint-disable react/prop-types */

import { createContext } from "react";

const ContextApi = ({children}) => {

    const apiData = createContext();

    return (
        <>
            <apiData.Provider>
                {children}
            </apiData.Provider>
        </>
    );
};

export default ContextApi;