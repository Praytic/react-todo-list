import React from "react";
import {Button, Modal, FormGroup, FormControl} from "react-bootstrap";

const AddTodoModal = props => {
    return (
        <Modal show={props.show} onHide={props.onCancel}>
          <Modal.Header>
            <Modal.Title>Adding todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <FormControl name="title"
                           type="text"
                           label="Title"
                           value={props.term.title}
                           placeholder="Enter title"
                           onChange={props.onChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl name="description"
                           componentClass="textarea"
                           label="Description"
                           value={props.term.description}
                           placeholder="Enter description"
                           onChange={props.onChange}/>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onSave}>Save</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
};

export default AddTodoModal;