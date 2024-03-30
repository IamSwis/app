import "./Catalog.css";
import Product from "../components/Product.jsx";

function Catalog() {
  const data = [
    {
      title: "Troposphere",
      price: 24.99,
      category: "Tier 4",
      image: "boa.png",
      _id: "001",
    },
    {
      title: "Stratosphere",
      price: 34.99,
      category: "Tier 3",
      image: "scar.jpg",
      _id: "002",
    },
    {
      title: "Mesosphere",
      price: 44.99,
      category: "Tier 2",
      image: "strat.jpg",
      _id: "003",
    },
    {
      title: "Magnetosphere",
      price: 54.99,
      category: "Tier 1",
      image: "topo.jpg",
      _id: "004",
    },
  ];
  return (
    <div className="catalog page">
      <h1>Space Storage Trust Us Its Safe</h1>

      {data.map((prod) => (
        <Product key={prod._id} info={prod}></Product>
      ))}
    </div>
  );
}

export default Catalog;
