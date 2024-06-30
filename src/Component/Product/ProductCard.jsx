import './ProductCard.css'
import image from "../../../public/computer.webp"
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
      <div class="card shadow-sm">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Budget PC With AMD Ryzen 5 3600 Processor</h5>
          <p class="card-text mb-1">Intel 13th Gen Core i5 13400F Raptor Lake Processor.</p>
          <div className='d-flex justify-content-between'>
            <p class="card-text fw-bold text-danger">Price : 110,000 ৳</p>
            <p class="card-text fw-bold">Category : ASUS</p>
          </div>
          <Link to={""} class="btn btn-dark w-100 rounded-0">Add to Cart</Link>
          <Link to={""} class="btn btn-danger w-100 rounded-0 d-none">Already added to cart</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard