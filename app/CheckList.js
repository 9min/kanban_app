import React, { Component } from 'react';

class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist__task" key={task.id}>
                <input type="checkbox" defaultChecked={task.done} id={"checkItem_"+task.id} />
                <label htmlFor={"checkItem_"+task.id}>{task.name}</label>
                <a href="#" className="checklist__task--remove" />
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default CheckList;