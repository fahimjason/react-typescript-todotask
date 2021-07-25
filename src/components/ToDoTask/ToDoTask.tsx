import React from 'react';

interface IToDo {
    task: string;
    assigned: string;
    index: number;
    addProgress: (index: number) => void;
}

const ToDoTask = ({ task, assigned, index, addProgress }: IToDo) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Task: {task}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Assigned to: {assigned}</h6>
                    <button onClick={() => addProgress(index)} className="btn btn-primary">Start Task</button>
                </div>
            </div>
        </div>
    );
};

export default ToDoTask;