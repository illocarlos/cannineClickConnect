import { createContext, useContext } from 'react';

const DateContext = createContext();

export function DateProvider({ children }) {
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <DateContext.Provider value={{ getCurrentDate }}>
            {children}
        </DateContext.Provider>
    );
}

export function useDate() {
    return useContext(DateContext);
}
