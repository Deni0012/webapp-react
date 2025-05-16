import { createContext, useState } from "react";

export const LoadContext = createContext();

export function LoadProvider({ children }) {

    const [load, setLoad] = useState(false);


    return <LoadContext.Provider value={{ load, setLoad }} >
        <div>
            {children}
        </div>
    </LoadContext.Provider>
}