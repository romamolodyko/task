import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task.jsx';

class TaskRender {

    static TODO = 'task_todo';
    static DO = 'task_do';
    static DONE = 'task_done';

    constructor(taskList) {
        this.taskList = taskList;
    }

    render() {
        ReactDOM.render(this.taskList.render(Task.DO), document.getElementById(TaskRender.DO));
        ReactDOM.render(this.taskList.render(Task.TODO), document.getElementById(TaskRender.TODO));
        ReactDOM.render(this.taskList.render(Task.DONE), document.getElementById(TaskRender.DONE));
    }
}

export default TaskRender;