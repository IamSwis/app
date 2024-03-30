import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
  const [list, setList] = useState(["Test40", "Test30", "Test"]);

  function addItem() {
    console.log("adding");

    let copy = [...list];
    copy.push("NEW");
    setList(copy);
  }

  return (
    <div className="shopping-list page">
      <h3>Shopping List</h3>

      <div className="box">
        <input type="text"></input>
        <btn onClick={addItem} className="btn btn-lg btn-dark -outline-success">
          Add To Space
        </btn>
      </div>

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
