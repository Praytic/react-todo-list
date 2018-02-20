import React, {Component} from "react";
import TodoList from "./TodoList";
import AddTodoModal from "./AddTodoModal";
import "./App.css";
import { Navbar, Col, FormControl, Button} from "react-bootstrap";

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

  onSave = (event) => {
    event.preventDefault();
    this.setState({
      term: this.clearTerm,
      items: [...this.state.items, this.state.term],
      isOpen: !this.state.isOpen
    });
  };

  onDelete = (item) => {
    this.setState(prevState => ({
      items: this.state.items.filter(i => i !== item)
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

          <AddTodoModal show={this.state.isOpen}
                        term={this.state.term}
                        onChange={this.onChange}
                        onCancel={this.toggleModal}
                        onSave={this.onSave}/>

          <TodoList onDelete={this.onDelete}
                    items={this.state.items}/>
        </div>
    );
  }
}