import React, {Component} from "react";
import TodoList from "./TodoList";
import AddTodoModal from "./AddTodoModal";
import TodoNavbar from "./TodoNavbar";
import "./App.css";

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

  onSearch = (updatedList) => {
    this.setState({items: updatedList});
  };

  render() {
    return (
        <div>
          <TodoNavbar updateList={this.onSearch}
                      addTodo={this.toggleModal}
                      items={this.state.items}/>

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