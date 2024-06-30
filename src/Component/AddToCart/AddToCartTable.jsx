import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import image from "../../../public/computer.webp"

const AddToCartTable = () => {

    const data = [
        {
            product_name: "Intel i5",
            product_desc: "Intel i5",
            product_quentity: "10",
            product_price: "100",
            product_image: image,
        },
        {
            product_name: "Intel i5",
            product_desc: "Intel i5",
            product_quentity: "10",
            product_price: "100",
            product_image: image,
        },
        {
            product_name: "Intel i5",
            product_desc: "Intel i5",
            product_quentity: "10",
            product_price: "100",
            product_image: image,
        },
    ]


    const actionTemplate = (row) => {
        return (
            <div className="d-flex align-items-center gap-2">
                <Button label="View" icon="pi pi-eye" className="p-button-info p-mr-2" onClick={() => viewUser(row._id)} />
                {/* <Button label="Edit" icon="pi pi-pencil" className="p-button-warning p-mr-2" onClick={() => editUser(row._id)} /> */}
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={() => deleteUser(row._id)} />
            </div>
        );
    };

    const viewUser = (id) => {
        // Implement view user logic
        console.log('View user', id);
    };

    // const editUser = (id) => {
    //     console.log('Edit user', id);
    // };

    const deleteUser = (id) => {
        // Implement delete user logic
        console.log('Delete user', id);
    };

    const imageBodyTemplate = (row) => {
        return <img src={row.product_image} alt={row.product_name} style={{ width: "40px" }} />;
    };

    const quentityBodyTemplate = (row) => {
        return (
            <div className='d-flex align-items-center gap-3'>
                <button className='btn btn-danger rounded-0'>-</button>
                <span>{row.product_quentity}</span>
                <button className='btn btn-success rounded-0'>+</button>
            </div>
        )
    };

    return (
        <div className="card">
            <DataTable value={data} showGridlines stripedRows tableStyle={{ minWidth: '50rem' }}>
                <Column field="product_name" header="Product Name" style={{ minWidth: '12rem' }}></Column>
                <Column field="product_desc" header="Product Desc" style={{ minWidth: '12rem' }}></Column>
                <Column header="Product Quentity" body={quentityBodyTemplate} style={{ minWidth: '12rem' }}></Column>
                <Column field="product_price" header="Product Price" style={{ minWidth: '12rem' }}></Column>
                <Column header="Product Image" body={imageBodyTemplate} style={{ minWidth: '12rem' }}></Column>
                <Column header="Actions" body={actionTemplate}></Column>
            </DataTable>
        </div>
    )
}

export default AddToCartTable