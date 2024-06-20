import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useAuthContext } from '../../../Context/AuthContext';

const UserTable = () => {
  const { data, pagination, loading, error, UserDataFetch } = useAuthContext()
  const actionTemplate = (row) => {
    return (
      <div className="d-flex align-items-center gap-2">
        <Button label="View" icon="pi pi-eye" className="p-button-info p-mr-2" onClick={() => viewUser(row._id)} />
        <Button label="Edit" icon="pi pi-pencil" className="p-button-warning p-mr-2" onClick={() => editUser(row._id)} />
        <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={() => deleteUser(row._id)} />
      </div>
    );
  };

  const viewUser = (id) => {
    // Implement view user logic
    console.log('View user', id);
  };

  const editUser = (id) => {
    // Implement edit user logic
    console.log('Edit user', id);
  };

  const deleteUser = (id) => {
    // Implement delete user logic
    console.log('Delete user', id);
  };

  return (
    <>
      <div className="card">
        {loading ? (
          <h4 className='d-flex align-items-center justify-content-center' style={{ height: "50vh" }}>Loading...</h4>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <DataTable value={data} showGridlines stripedRows tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="Name" style={{ minWidth: '12rem' }}></Column>
            <Column field="email" header="Email" style={{ minWidth: '12rem' }}></Column>
            <Column field="phone" header="Phone" style={{ minWidth: '12rem' }}></Column>
            <Column field="role" header="Role" style={{ minWidth: '12rem' }}></Column>
            <Column field="chackbox" header="Terms & Conditions" style={{ minWidth: '12rem' }}></Column>
            <Column field="joinig_date" header="Joinig Date" style={{ minWidth: '12rem' }}></Column>
            <Column header="Actions" body={actionTemplate}></Column>
          </DataTable>
        )}
      </div>

      <div className='d-flex align-items-center justify-content-center gap-3 mt-3'>
        <button
          className='btn btn-warning rounded-0'
          onClick={() => UserDataFetch(pagination?.previous)}
          disabled={!pagination?.previous}>Prev</button>

        <span>{`${pagination?.current_page ? pagination?.current_page : "0"}-${pagination?.per_page ? pagination?.per_page : "0"} of ${pagination?.total_page ? pagination?.total_page : "0"}`}</span>

        <button
          className='btn btn-warning rounded-0'
          onClick={() => UserDataFetch(pagination?.next)}
          disabled={!pagination?.next}>Next</button>
      </div>
    </>
  )
}

export default UserTable