import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count:0 },
        { id: 2, name: 'Running', count:0 },
        { id: 3, name: 'Coding', count:0 },
    ],
};

  render() {
    return(
      <>
      <nav>Habit Tracker<span>{this.state.habits.length}</span></nav>
      <div className="addHabit">
        <input type="text" name="" id="" placeholder="Habit"/>
        <button className="btn_addHabit">Add</button>
      </div>
      <Habits />
      <button className="resetAll">Reset All</button>
      </>
    );

  } 
}

export default App;
