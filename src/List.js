import React from "react";
import { Table } from 'react-bootstrap';

const List = props => (
    <Table striped bordered condensed hover>
        <tbody>
        {
            props.items.map((item, index) =>
                <tr>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.isDone}</td>
                </tr>)
        }
        </tbody>
    </Table>
);

export default List;