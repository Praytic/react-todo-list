import React, {Component} from 'react';
import List from './List';
import NewTodo from './NewTodo';
import './App.css';
import {Navbar, Row, Nav, NavItem, Col, FormGroup, FormControl, Button} from 'react-bootstrap';

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

          <NewTodo show={this.state.isOpen}
                   onClose={this.toggleModal}>
            <form className="App" onSubmit={this.onSubmit}>
              <h3>Adding todo</h3>

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

              <FormGroup>
                <Col mdOffset={8} md={2}>
                  <Button type="submit">Save</Button>
                </Col>
                <Col md={2}>
                  <Button onClick={this.toggleModal}>Cancel</Button>
                </Col>
              </FormGroup>
            </form>
          </NewTodo>

          <List items={this.state.items}/>
        </div>
    );
  }
}