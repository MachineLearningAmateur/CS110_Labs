import "../css/InputBox.css";
import React, {useState, useContext, useEffect} from "react";
import { postsContext } from "../App";

export default function InputBox() {
  const [comment, updateComment] = useState({ userName: "", text: "", commentId: ""});

  const {commentArray, updateArray} = useContext(postsContext);

  const handleSubmit = async (formData) => {
    if (formData.userName.replace(/\s+/g, '') === "" || formData.text.replace(/\s+/g, '') === "") {
      return;
    }
    formData.commentId = Math.random().toString(36).substring(2, 9);
    updateArray([...commentArray, { formData }]);
    //console.log(formData.commentId)
    updateComment({userName: "", text: "", commentId: ""});
  };

  //function async handleSubmit () {}
  return (
    <div>
    <form
      className="container"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(comment);
      }}
    >
      <div className="post">New Post</div>
      <div className="content">
        <input
          maxLength="30"
          className="name"
          placeholder="Name"
          value={comment.userName}
          onChange={(event) => {
            updateComment({ ...comment, userName: event.target.value }); //modifies userName and keeps everything else the same in comment
          }}
        ></input>
        <textarea
          className="text"
          placeholder="Give us your thoughts!"
          value={comment.text}
          onChange={(event) => {
            updateComment({ ...comment, text: event.target.value });
          }}
        ></textarea>
        <button className="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}
