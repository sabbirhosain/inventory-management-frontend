import UserTable from '../Component/Users/Table/UserTable'
import { useAuthContext } from '../Context/AuthContext'

const User = () => {
    const { setSearch } = useAuthContext()
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center p-5 mb-3 bg-secondary'>
                <input type="search" onChange={(event) => setSearch(event.target.value)} className='form-control w-25' />
            </div>
            <UserTable />
        </div>
    )
}

export default User