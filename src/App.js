import React from 'react';
import './App.css';
import TodoList from './components/ToDoList';
import SampleTasks from './components/SampleTasks';


class App extends React.Component {
  state = {
    tasks: { SampleTasks }
  };

  loadTasks = () => {
    this.setState({ tasks: SampleTasks });
  }

  toggleComplete = task => {
    const tasks = { ...this.state.tasks };


    this.setState({
      tasks
    });
  }



  render() {
    return (
      <div>
        <header>
          <h1>Luke's To Do List</h1>
          <div className="todoContainer">

            {Object.keys(this.state.tasks.SampleTasks).map(key => (
              <TodoList
                key={key}
                index={key}
                details={this.state.tasks.SampleTasks[key]}
              />
            ))}


          </div>
        </header>
      </div>
    );
  }

}

export default App;
