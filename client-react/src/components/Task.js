import React from "react";
import axios from "axios";
import '../Styling.css'
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.taskName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  addTask = () => {
    let url = "http://localhost:3001/tasks";
    axios.post(url, { name: this.taskName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.taskName.current.value = "";
    });
  };

  updateTask = (id) => {
    let url = "http://localhost:3001/tasks/" + id + "/complete";
    axios.put(url, { taskid: this.id, isComplete: this.isComplete }).then(response => {
      this.getData();
    });
  };
  deleteTask = (id) => {
    let url = `http://localhost:3001/tasks/${id}/delete`;
    axios.delete(url, { taskid: this.id}).then(response => {
      console.log(response)
    });
    
  };

  render() {
    return (
      <div>
        <h3>List of tasks (React)</h3>
        <input ref={this.taskName} />
        <button type="button" className="btn btn-primary" onClick={this.addTask}>add</button>
        <ul>
          {this.state.tasks.map(p => (
            <li key={p.taskid}>
              {p.name} : { p.complete ? "complete" : "not complete" } <button type="button" className="btn btn-success" onClick={this.updateTask}>Complete</button><button type="button" className="btn btn-danger" onClick={this.deleteTask}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
