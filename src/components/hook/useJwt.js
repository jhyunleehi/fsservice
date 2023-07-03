import { createContext, useContext, useState } from "react";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState("");

    return (
        <AuthContext.Provider value={{ jwt, setJwt }}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;