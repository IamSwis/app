import axios from "axios";

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



class DataService {
  async getCatalog() {
    //without a server run front end  with below;
    //return data;

    //call the server
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.get(
      "http://127.0.0.1:5000/api/products",
      product
    );
    return response.data;
  }
}

export default DataService;
