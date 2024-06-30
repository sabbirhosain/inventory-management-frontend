import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import User from './Pages/User';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App