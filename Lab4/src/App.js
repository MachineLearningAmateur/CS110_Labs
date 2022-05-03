import logo from './logo.svg';
import ListItem from "./Components/ListItem"
import React from 'react';
import './App.css'
import InputBox from './Components/InputBox';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "tasks": [],
      "input": '',
      "name": 'temp'
    }
  }

  addToDo() {
    //changes our state and adds comment
    //when state is called, render gets called
  }

  render() {
    return (
      <div className="App">
        <InputBox/>
      </div>
    );
  }
}
export default App;
