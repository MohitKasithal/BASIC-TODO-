import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function List({ data }) {
  return (
    <>
      {" "}
      <ListGroup>
        {data.map((item, i) => (
          <ListGroupItem>{item}</ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default List;
