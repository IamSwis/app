import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
  const [list, setList] = useState(["Test40", "Test30", "Test"]);
  const [text, setText] = useState("");

  function addItem() {
    console.log("adding");

    let copy = [...list];
    copy.push("NEW");
    setList(copy);
  }

  function handleTextChange(e) {
    const val = e.target.value;
    setText(val);
  }

  function deleteAll() {
    setList([]);
  }

  return (
    <div className="shopping-list page">
      <h3>Shopping List</h3>

      <div className="box">
        <input onChange={handleTextChange} type="text"></input>
        <btn onClick={addItem} className="btn btn-lg btn-dark -outline-success">
          Add To Space
        </btn>
        <btn onClick={deleteAll} className="btn btn-sm btn-danger">
          Clear
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
