
import React from 'react';

class Task extends React.Component{

    static TODO = 1;
    static DO = 2;
    static DONE = 3;

    constructor(id, title, body, time, type) {
        super();
        this.id = id;
        this.title = title;
        this.body = body;
        this.time = time;
        this.type = type;
    }

    render(i) {
        return (
            <li className="task" key={i}>
                <div className="task__name">{this.body}</div>
                <div className="task__date">{this.time}</div>
            </li>
        )
    }
}

export default Task;
