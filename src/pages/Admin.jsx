import { useState } from "react";
import "./Admin.css";
import DataService from "../services/dataService";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });

  const [allProducts, setAllProducts] = useState([]);

  function handleCouponChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  function handleProductChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);
    product.price = parseFloat(product.price);

    var copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);

    //sends the product to the server

    let service = new DataService();
    service.saveProduct(product);
  }
  return (
    <div className="admin page">
      <h1>Store Administration</h1>

      <div className="parent">
        <div className="prods">
          <h3>Products</h3>

          <div className="form">
            <div>
              <label className="form-label">Title</label>
              <input
                onChange={handleProductChange}
                name="title"
                type="text"
                className="form-control"
              ></input>
            </div>

            <div>
              <label className="form-label">Category</label>
              <input
                onChange={handleProductChange}
                name="category"
                type="text"
                className="form-control"
              ></input>
            </div>

            <div>
              <label className="form-label">Image</label>
              <input
                onChange={handleProductChange}
                name="image"
                type="text"
                className="form-control"
              ></input>
            </div>

            <div>
              <label className="form-label">Price</label>
              <input
                onChange={handleProductChange}
                name="price"
                type="number"
                className="form-control"
              ></input>
            </div>

            <div>
              <button onClick={saveProduct} className="btn btn-danger">
                SAVE PRODUCT
              </button>
            </div>
          </div>

          <ul>
            {allProducts.map((p) => (
              <li>
                {p.title}-{p.category}- ${p.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="coupons">
          <h3>Coupons</h3>

          <div className="form">
            <div>
              <label className="form-label">Code</label>
              <input
                onChange={handleCouponChange}
                name="code"
                type="text"
                className="form-control"
              ></input>
            </div>

            <div>
              <label className="form-label">Alert</label>
              <input
                onChange={handleCouponChange}
                name="code"
                type="text"
                className="form-control"
              ></input>

              <div className="action">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={saveCoupon}
                >
                  SAVE COUPON
                </button>
              </div>
            </div>
            <ul>
              {allCoupons.map((c) => (
                <li>
                  {c.code} - ${c.discount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//<button type="submit" className="btn btn-primary">
//{" "}
//Apply Coupon{" "}
//</button>
export default Admin;
