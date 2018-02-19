import React from "react";
import {Col, Table} from "react-bootstrap";

const List = props => (
    <Col md={10} mdOffset={1}>
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Is done</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        {
          props.items.map((item, index) =>
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.isDone}</td>
                <td>{item.isDone}</td>
              </tr>)
        }
        </tbody>
      </Table>
    </Col>
);

export default List;