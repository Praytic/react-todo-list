import React from "react";
import {Button, Navbar, Row, Col, FormControl} from "react-bootstrap";

class TodoNavbar extends React.Component {

  onSearch = (event) => {
    event.preventDefault();
    var newList = this.props.items;
    var searchQuery = this.searchInput.value;
    newList = newList.map((item) => {
      item.isVisible = !searchQuery || item.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1;
      return item;
    });
    this.props.updateList(newList);
  };

  render() {
    return (
        <Navbar>
          <Navbar.Collapse>
            <Row>
              <Col md={6}>
                <Navbar.Form>
                  <form onSubmit={this.onSearch}>
                    <FormControl type="text"
                                 placeholder="Search"
                                 inputRef={(e) => {
                                   this.searchInput = e
                                 }}/>
                  </form>
                </Navbar.Form>
              </Col>
              <Col md={6}>
                <Navbar.Form pullRight>
                  <Button onClick={this.props.addTodo}>Add todo</Button>
                </Navbar.Form>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default TodoNavbar;