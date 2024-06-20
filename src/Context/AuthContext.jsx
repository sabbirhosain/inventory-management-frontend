import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
const AuthContexProvider = createContext()

const AuthContext = ({ children }) => {
    const [data, setData] = useState([])
    useEffect(() => { UserDataFetch() }, [])
    console.log(data);
    
    const UserDataFetch = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/auth/users")
            setData(response.data.result)
        } catch (error) {
            console.error(error);
        }
    }









    return (
        <AuthContexProvider.Provider value={{}}>
            {children}
        </AuthContexProvider.Provider>
    )
}

export default AuthContext

// coustom hooks
export const useAuthContext = () => {
    return useContext(AuthContexProvider)
};