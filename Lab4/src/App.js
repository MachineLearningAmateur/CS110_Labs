import './App.css'
import React, { createContext, useState} from "react";
import InputBox from './Components/InputBox';
import OutputBox from './Components/OutputBox';
import 'bootstrap/dist/css/bootstrap.min.css';

export const postsContext = createContext(null);

export default function App() {
  document.body.style = 'background: white;';
  const [commentArray, updateArray] = useState([]);
  const [replies, updateReplies] = useState([]);
  // const [reply, updateReply] = useState({ userName: "", content: "" });
  // const [replies, updateReplies] = useState([]);
  return (
    <div className="App">
    <postsContext.Provider value={{commentArray, updateArray, replies, updateReplies}}>
    <InputBox/>
    <OutputBox/>
    </postsContext.Provider>
  </div>
  )
}

