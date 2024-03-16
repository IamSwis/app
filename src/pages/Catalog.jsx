import "./Catalog.css";
import Product from "../components/Product.jsx";

function Catalog() {
  const data = [
    {
      title: "Troposphere",
      price: 24.99,
      category: "Local",
      image:
        "/Users/iamswis/Documents/SDGKU/Full Stack DEV /108/LobbyTech/app/public/images/pexels-josh-sorenson-570986.jpg",
      _id: "001",
    },
    {
      title: "Stratosphere",
      price: 34.99,
      category: "Local",
      image: "https://picsum.photos/200",
      _id: "002",
    },
    {
      title: "Mesosphere",
      price: 44.99,
      category: "Local",
      image: "https://picsum.photos/200",
      _id: "003",
    },
    {
      title: "Magnetosphere",
      price: 54.99,
      category: "Local",
      image: "https://picsum.photos/200",
      _id: "004",
    },
  ];
  return (
    <div className="catalog page">
      <h1>Cloud Storage Free up your Space</h1>

      <Product info={data[0]}></Product>
      <Product info={data[1]}></Product>
      <Product info={data[2]}></Product>
      <Product info={data[3]}></Product>
    </div>
  );
}

export default Catalog;
