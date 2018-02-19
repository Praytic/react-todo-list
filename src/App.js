import React, {Component} from 'react';
import List from './List';
import './App.css';
import { Modal, Navbar, Row, Nav, NavItem, Col, FormGroup, FormControl, Button} from 'react-bootstrap';

export default class App extends Component {
  clearTerm = {
    title: '',
    description: '',
    isDone: false
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

  render() {
    return (
        <div>
          <Navbar>
            <Navbar.Collapse>
              <Col md={6}>
                <Navbar.Form>
                  <FormControl type="text" placeholder="Search"/>
                </Navbar.Form>
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

          <List items={this.state.items}/>
        </div>
    );
  }
}