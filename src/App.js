import React, {Component} from "react";
import List from "./List";
import "./App.css";
import {Modal, Navbar, Col, FormGroup, FormControl, Button} from "react-bootstrap";

export default class App extends Component {
  clearTerm = {
    title: '',
    description: '',
    isDone: false,
    isVisible: true
  };

  constructor(props) {
    super(props);
    this.state = {
      term: this.clearTerm,
      items: [],
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      term: this.clearTerm,
      isOpen: !this.state.isOpen
    });
  };

  onChange = (event) => {
    const newTerm = {...this.state.term};
    newTerm[event.target.name] = event.target.value;
    this.setState({term: newTerm});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: this.clearTerm,
      items: [...this.state.items, this.state.term],
      isOpen: !this.state.isOpen
    });
  };

  onDelete = (id) => {
    this.setState(prevState => ({
      items: this.state.items.filter((_, i) => i !== id)
    }));
  };

  onSearch = (event) => {
    event.preventDefault();
    var updatedList = this.state.items;
    var searchQuery = this.searchInput.value;
    updatedList = updatedList.map((item) => {
      item.isVisible = !searchQuery || item.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1;
      return item;
    });
    this.setState({items: updatedList});
  };

  render() {
    return (
        <div>
          <Navbar>
            <Navbar.Collapse>
              <Col md={6}>
                <form onSubmit={this.onSearch}>
                  <FormControl type="text"
                               placeholder="Search"
                               inputRef={(e) => { this.searchInput = e }}/>
                </form>
              </Col>
              <Col md={6}>
                <Navbar.Form pullRight>
                  <Button onClick={this.toggleModal}>Add todo</Button>
                </Navbar.Form>
              </Col>
            </Navbar.Collapse>
          </Navbar>

          <Modal show={this.state.isOpen} onHide={this.toggleModal}>
            <Modal.Header>
              <Modal.Title>Adding todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <FormControl name="title"
                             type="text"
                             label="Title"
                             value={this.state.term.title}
                             onChange={this.onChange}
                             placeholder="Enter title"/>
              </FormGroup>
              <FormGroup>
                <FormControl name="description"
                             componentClass="textarea"
                             label="Description"
                             value={this.state.term.description}
                             onChange={this.onChange}
                             placeholder="Enter description"/>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.onSubmit}>Save</Button>
              <Button onClick={this.toggleModal}>Cancel</Button>
            </Modal.Footer>
          </Modal>

          <List onDelete={this.onDelete} items={this.state.items}/>
        </div>
    );
  }
}