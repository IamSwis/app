import "./Catalog.css";
import Product from "../components/Product.jsx";
import { useEffect, useState } from "react";
import DataService from "../services/dataService.js";

function Catalog() {
  const [data, setData] = useState([]);

  async function loadCatalog() {
    let service = new DataService();
    let cat = await service.getCatalog();
    setData(cat);
  }

  useEffect(function () {
    loadCatalog();
  }, []);

  return (
    <div className="catalog page">
      <h1> You Choose Your Speed, We Keep You Connected</h1>

      {data.map((prod) => (
        <Product key={prod._id} info={prod}></Product>
      ))}
    </div>
  );
}

export default Catalog;
