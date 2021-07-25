import React, { useState } from 'react';
import Done from '../Done/Done';
import InProgress from '../InProgress/InProgress';
import ToDoTask from '../ToDoTask/ToDoTask';

interface IToDo {
    task: string;
    assigned: string;
}

const AddTask = () => {
    const [task, setTask] = useState({} as IToDo);
    const [taskList, setTaskList] = useState<IToDo[]>([]);
    const [progressList, setProgressList] = useState<IToDo[]>([]);
    const [doneList, setDoneList] = useState<IToDo[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const addTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTaskList([...taskList, task]);
        setTask({
            task: "",
            assigned: ""
        });
        e.preventDefault();
    }

    const addProgress = (index: number) => {
        const newTaskList = taskList.filter((tsk, idex) => idex !== index);
        const newProgressList = taskList.filter((tsk, idex) => idex === index);
        setTaskList(newTaskList);
        setProgressList([...progressList, newProgressList[0]]);
    }

    const addDone = (index: number) => {
        const newProgressList = progressList.filter((tsk, idex) => idex !== index);
        const newDoneList = progressList.filter((tsk, idex) => idex === index);
        setProgressList(newProgressList);
        setDoneList([...doneList, newDoneList[0]])
    }

    return (
        <div className="">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3">
                        <h3 className="py-2">Add Task</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Task Name</label>
                                <input
                                    value={task.task}
                                    onChange={handleChange}
                                    name="task"
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Assigned To</label>
                                <input
                                    value={task.assigned}
                                    onChange={handleChange}
                                    name="assigned"
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" onClick={e => addTask(e)} className="btn btn-primary">Add Task</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <h3 className="py-2 text-danger">To-DO Tasks</h3>
                        {
                            taskList.map((task, index) => <ToDoTask key={index} index={index} task={task.task} assigned={task.assigned} addProgress={addProgress} />)
                        }
                    </div>
                    <div className="col-md-3">
                        <h3 className="py-2 text-primary">In Progress</h3>
                        {
                            progressList.map((progress, index) => <InProgress key={index} index={index} task={progress.task} assigned={progress.assigned} addDone={addDone} />)
                        }
                    </div>
                    <div className="col-md-3">
                        <h3 className="py-2 text-success">Done</h3>
                        {
                            doneList.map((done, index) => <Done key={index} task={done.task} assigned={done.assigned} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;