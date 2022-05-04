import { useState, useEffect } from 'react';
import './App.css'
import InputBox from './Components/InputBox';
import OutputBox from './Components/OutputBox';
import Posts from './Components/Posts';

export default function App() {
  const [backendComments, setBackendComments] = useState([]); //creates a list

  const addPost = (name, text) => {
      createComment(name, text).then((comment)=> {
        setBackendComments([...backendComments, comment]);
        console.log(comment)
      })
  }

  return (
    <div className="App">
    <InputBox handleSubmit={addPost}/>
    <OutputBox body={backendComments}/>
  </div>
  )
}

export const createComment = async (username,text, parentId = null) => {
  let commentId = Math.random().toString(36).substring(2, 9);
  console.log("New comment:", parentId,text, commentId);
  return {
    id: commentId,
    body: text,
    parentId,
    username: username,
    createdAt: new Date().toISOString(),
  };
};
