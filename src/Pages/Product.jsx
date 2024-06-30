import { Link } from "react-router-dom"
import ProductCard from "../Component/Product/ProductCard"
import { useState } from "react"

const Product = () => {
    const [priceRange, setPriceRange] = useState(0)

    const handlePriceChange = (e) => {
        setPriceRange(e.target.value);
    };


    return (
        <div className="container-fluid">
            <div className="shadow-sm bg-white py-3 mt-2 mb-4">
                <div className="px-5 d-flex align-items-center justify-content-between">
                    <h4>Ecommerce</h4>
                    <div className="d-flex align-items-center gap-2">
                        <Link to={"/cart"} type="button" class="btn btn-warning rounded-0 position-relative me-3"> Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0<span class="visually-hidden">unread messages</span> </span></Link>
                        <button className="btn btn-danger rounded-0">Logout</button>
                        <Link to={"/profile"} className="btn btn-dark rounded-0">Profile</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="shadow-sm bg-white px-2 py-3">
                        <div className="mb-3">
                            <h6>Search</h6>
                            <input type="search" class="form-control rounded-0 h-25" />
                        </div>

                        <div className="mb-3">
                            <h6 className="border-bottom">Price Range</h6>
                            <input type="text" class="form-control text-center rounded-0 h-25 mb-2" value={priceRange} readOnly />
                            <input type="range" class="form-range" min="0" max="100000" step="1000" value={priceRange} onChange={handlePriceChange}></input>
                        </div>

                        <div className="mb-3">
                            <h6 className="border-bottom">Availability</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1"> Stock in </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2"> Stock Out </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <h6 className="border-bottom">Brand Name</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name1" />
                                <label class="form-check-label" for="brand_name1">Acer</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name2" />
                                <label class="form-check-label" for="brand_name2">Apple</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name3" />
                                <label class="form-check-label" for="brand_name3">Hp</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name4" />
                                <label class="form-check-label" for="brand_name4">Asus</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name5" />
                                <label class="form-check-label" for="brand_name5">Avita</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name6" />
                                <label class="form-check-label" for="brand_name6">Dell</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <h6 className="border-bottom">Processor Type</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name1" />
                                <label class="form-check-label" for="brand_name1">Intel</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand_name2" />
                                <label class="form-check-label" for="brand_name2">Ryzen</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination gap-1">
                                <li class="page-item"><Link to={""} class="page-link rounded-0 disabled">Previous</Link></li>
                                <li class="page-item"><Link to={""} class="page-link rounded-0">1</Link></li>
                                <li class="page-item"><Link to={""} class="page-link rounded-0">2</Link></li>
                                <li class="page-item"><Link to={""} class="page-link rounded-0">3</Link></li>
                                <li class="page-item"><Link to={""} class="page-link rounded-0">4</Link></li>
                                <li class="page-item"><Link to={""} class="page-link rounded-0">5</Link></li>
                                <li class="page-item"><Link to={""} class="page-link rounded-0">Next</Link></li>
                            </ul>
                        </nav>
                        <h5>Showing 1 to 20 of 178 (9 Pages)</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product