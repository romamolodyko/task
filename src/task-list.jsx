
import React from 'react';

class TaskList extends React.Component{
    constructor(task) {
        super();
        this.task = task;
    }

    render(type) {
        return (
            <ul className="task__item sortable draggable" id="drop">
                {this.task.map(function (el, index) {
                    if(el.type == type)
                        return el.render(index);
                })}
            </ul>
        )
    }

}
export default TaskList;