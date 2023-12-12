import { createContext } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    return <UserContext.Provider value={{username: 'grumpy19'}}>
        {props.children}
    </UserContext.Provider>
}