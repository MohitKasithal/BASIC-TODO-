import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

function List({ data, handleDeleteList }) {
  return (
    <>
      {" "}
      <ListGroup className="listContainer">
        {data.map((item, i) => (
          <ListGroupItem className="list">
            {item}

            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDeleteList(i)}>
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default List;
