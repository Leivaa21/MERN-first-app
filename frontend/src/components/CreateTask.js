import React, { Component } from 'react'
import axios from 'axios'

export default class CreateTask extends Component {

    state = {
        tasks: [],
        taskName: ''
    }
    async componentDidMount() {
        this.getTasks();
        console.log(this.state.tasks);
    }

    getTasks = async () => {
        const res = await axios.get('http://localhost:4000/api/tasks');
        this.setState({tasks: res.data})
    }

    onChangeTaskName = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }

     onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/tasks', {
            taskName: this.state.taskName
        })
        this.setState({taskName:''})
        this.getTasks()
    }

    deleteTask = async (id) => {
        await axios.delete('http://localhost:4000/api/tasks/' + id)
        console.log(id)
        this.getTasks();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>New task</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.taskName}
                                    onChange={this.onChangeTaskName} 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.tasks.map(task => (
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={task.taskName}
                                    onDoubleClick={() => this.deleteTask(task._id)}
                                    >
                                    {task.taskName}
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
