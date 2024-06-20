import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./App.css"
import UserTable from './Component/Users/Table/UserTable';
import { useAuthContext } from './Context/AuthContext';

const App = () => {
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

export default App