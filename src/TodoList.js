import React from "react";
import TodoEntity from "./TodoEntity";
import {Col, Table} from "react-bootstrap";

class TodoList extends React.Component {
  render() {
    return (
        <Col md={10} mdOffset={1}>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th width="100">Is done</th>
              <th width="60"/>
            </tr>
            </thead>
            <tbody>
            {
              this.props.items
                  .filter(item => item && item.isVisible)
                  .map((item, index) =>
                      <TodoEntity key={index}
                                  item={item}
                                  onDelete={this.props.onDelete}/>)
            }
            </tbody>
          </Table>
        </Col>
    );
  }
}

export default TodoList;