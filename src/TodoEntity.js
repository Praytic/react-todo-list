import React from "react";
import {Button, Glyphicon, Checkbox} from "react-bootstrap";

const TodoEntity = props => {
  return (
      <tr>
        <td>{props.item.title}</td>
        <td>{props.item.description}</td>
        <td><Checkbox inline inputRef={ref => {
          props.item.isDone = ref;
        }}/></td>
        <td>
          <Button onClick={props.onDelete.bind(this, props.item)}>
            <Glyphicon glyph="trash"/>
          </Button>
        </td>
      </tr>
  );
};

export default TodoEntity;