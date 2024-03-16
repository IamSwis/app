import "./Product.css";
import QuantityAdjuster from "./QuantityAdjust";

function Product(props) {
  return (
    <div className="product">
      <h6>{props.info.title}</h6>
      <label>{props.info.price}</label>
      <img src="https://picsum.photos/200"></img>
      <QuantityAdjuster></QuantityAdjuster>
    </div>
  );
}

export default Product;
