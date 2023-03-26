import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import List from "./List";

function Home() {
  const [value, setValue] = useState();
  const [todo, setTodo] = useState([]);
  function handelAddList() {
    if (value !== "" && todo !== "") {
      setTodo([...todo, value]);
      setValue("");
    } else {
      setTodo([]);
      setValue("");
    }
  }
  function handleDeleteList(index) {
    const newTodo = todo.filter((item, i) => i !== index); // create a new array without the item at the given index
    setTodo(newTodo); // update the todo state with the new array
  }
  return (
    <>
      <div className="home">
        <div>
          <form>
            <Form.Control
              className="input-group"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Add List"
            />
            <Button variant="success" onClick={() => handelAddList()}>
              Add
            </Button>
          </form>
        </div>
        <div className="list">
          <List data={todo} handleDeleteList={handleDeleteList} />
        </div>
      </div>
    </>
  );
}

export default Home;
