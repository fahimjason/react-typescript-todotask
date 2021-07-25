import React from 'react';

interface IProgress {
    task: string;
    assigned: string;
    index: number;
    addDone: (index: number) => void;
}

const InProgress = ({ task, assigned, index, addDone }: IProgress) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Task: {task}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Assigned to: {assigned}</h6>
                    <button onClick={() => addDone(index)} className="btn btn-success">Done</button>
                </div>
            </div>
        </div>
    );
};

export default InProgress;