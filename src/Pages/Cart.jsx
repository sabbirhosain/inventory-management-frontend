import React from 'react'
import { Link } from 'react-router-dom'
import AddToCartTable from '../Component/AddToCart/AddToCartTable'

const Cart = () => {
    return (
        <div className='container-fluid'>
            <div className="shadow-sm bg-white py-3 mt-2 mb-4">
                <div className="px-5 d-flex align-items-center justify-content-between">
                    <h4>Ecommerce</h4>
                    <div className="d-flex align-items-center gap-4">
                        <Link to={"/cart"} type="button" class="btn btn-warning rounded-0 position-relative"> Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0<span class="visually-hidden">unread messages</span> </span></Link>
                        <button className="btn btn-dark rounded-0">Logout</button>
                    </div>
                </div>
            </div>
            <AddToCartTable />
            <div className="row justify-content-end mt-3">
                <div className="col-sm-3">
                    <ul class="list-group rounded-0">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Total Quentity : <span>10 Pices</span> </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Sub-Total : <span>1400 TAKA</span> </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Total Price : <span>1400 TAKA</span> </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Price Discount : <span>10 %</span> </li>
                        <button type="submit" className='btn btn-dark rounded-0 mt-3'>Confirm Shopping</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart