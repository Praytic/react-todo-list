import React from "react";
import {Button, Glyphicon, Checkbox, Col, Table} from "react-bootstrap";

class List extends React.Component {
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
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td><Checkbox inline inputRef={ref => {
                          item.isDone = ref;
                        }}/></td>
                        <td>
                          <Button onClick={this.props.onDelete.bind(this, index)}>
                            <Glyphicon glyph="trash"/>
                          </Button>
                        </td>
                      </tr>)
            }
            </tbody>
          </Table>
        </Col>
    );
  }
}

export default List;