import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
const AuthContexProvider = createContext()

const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({});
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => { UserDataFetch() }, [search])

    const UserDataFetch = async (page) => {
        try {
            setLoading(true)
            const response = await axios.get(`http://localhost:8000/api/v1/auth/users?search=${search}&page=${page}`)
            setData(response.data.result)
            setPagination(response.data.pagination)
            setLoading(false)
        } catch (error) {
            setError(error)
            console.error(error);
        }
    }

    return (
        <AuthContexProvider.Provider value={{ data, pagination, loading, error, setSearch, UserDataFetch }}>
            {children}
        </AuthContexProvider.Provider>
    )
}

export default AuthContext

// coustom hooks
export const useAuthContext = () => {
    return useContext(AuthContexProvider)
};