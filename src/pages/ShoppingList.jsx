import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
  const [list, setList] = useState(["Test40", "Test30", "Test"]);
  const [text, setText] = useState("");

  function addItem() {
    if (text.trim() !== "") {
      // Check if the text is not just empty spaces
      setList((prevList) => [...prevList, text]);
      setText(""); // Clear the input field after adding
    }
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function deleteAll() {
    setList([]);
  }

  return (
    <div className="shopping-list page">
      <h3>Shopping List</h3>

      <div className="box">
        <input value={text} onChange={handleTextChange} type="text" />
        <button
          onClick={addItem}
          className="btn btn-lg btn-dark btn-outline-success"
        >
          Add To Space
        </button>
        <button onClick={deleteAll} className="btn btn-sm btn-danger">
          Clear
        </button>
      </div>

      <ul>
        {list.map((item, index) => (
          // Use index as key for simplicity, consider unique IDs for more complex scenarios
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
