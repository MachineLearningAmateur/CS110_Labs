import './App.css'
import React, { createContext, useState} from "react";
import InputBox from './Components/InputBox';
import OutputBox from './Components/OutputBox';

export const postsContext = createContext(null);

export default function App() {
  const [commentArray, updateArray] = useState([]);
  
  return (
    <div className="App">
    <postsContext.Provider value={{commentArray, updateArray}}>
    <InputBox/>
    <OutputBox/>
    </postsContext.Provider>
  </div>
  )
}

