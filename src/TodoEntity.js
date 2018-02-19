import React from 'react';
import { Col, FormGroup, FormControl, Button } from 'react-bootstrap';

class TodoEntity extends React.Component {
    render() {
        return (
            <li>{this.props.title} : {this.props.description} : {this.props.isDone ? "True" : "False"}</li>
        );
    }
}

export default TodoEntity;