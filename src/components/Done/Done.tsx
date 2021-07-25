import React from 'react';

interface IDone {
    task: string;
    assigned: string;
}

const Done = ({ task, assigned }: IDone) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Task: {task}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Assigned to: {assigned}</h6>
                </div>
            </div>
        </div>
    );
};

export default Done;