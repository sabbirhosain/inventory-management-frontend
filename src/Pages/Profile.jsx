import React from 'react'

const Profile = () => {
    return (
        <div className='container-fluid'>
            <div className="row align-items-center justify-content-center vh-100">
                <div className="col-md-4">
                    <form className='row bg-white p-5'>
                        <h4 className='text-center pb-4'>Update Profile</h4>
                        <div className='col-sm-6 mb-3'>
                            <label className='form-label'>First Name</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <label className='form-label'>Last Name</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='col-sm-12 mb-3'>
                            <label className='form-label'>Email Address</label>
                            <input type="email" className='form-control' />
                        </div>
                        <div className='col-sm-12 mb-3'>
                            <label className='form-label'>Phone Number</label>
                            <input type="number" className='form-control' />
                        </div>
                        <button type="submit" className='btn btn-dark mt-3'>Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile