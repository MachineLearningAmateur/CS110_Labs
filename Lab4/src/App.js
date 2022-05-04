import logo from './logo.svg';
import ListItem from "./Components/ListItem"
import './App.css'
import InputBox from './Components/InputBox';
import OutputBox from './Components/OutputBox';

import React from 'react'

export default function App() {
  return (
    <div className="App">
    <InputBox/>
    <OutputBox/>
  </div>
  )
}

