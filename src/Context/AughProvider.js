import React, { createContext } from 'react';
import useFirebase from '../Component/hooks/useFirebase';
 

export const AughContext = createContext();

const AughProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AughContext.Provider value={allContext}>
            {children}
        </AughContext.Provider>
    );
};

export default AughProvider;