import React from "react";

const List = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item.title} : {item.description} : {item.isDone ? "True" : "False"}</li>)
        }
    </ul>
);

export default List;