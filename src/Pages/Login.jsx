import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container-fluid'>
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-4">
          <form className='row bg-white p-5'>
            <h4 className='text-center pb-4'>Login Now</h4>
            <div className='col-sm-12 mb-3'>
              <label className='form-label'>Email or Phone</label>
              <input type="text" className='form-control' />
            </div>
            <div className='col-sm-12 mb-3'>
              <label className='form-label'>Password</label>
              <input type="password" className='form-control' />
            </div>
            <button type="submit" className='btn btn-dark mt-3'>Login</button>
            <p className='text-center pt-4'>I have no account <Link to={"/register"}>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login