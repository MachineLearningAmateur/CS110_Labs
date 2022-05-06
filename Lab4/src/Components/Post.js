import React, { useContext } from "react";
import { postsContext } from "./InputBox";
import "../css/Post.css";
import Vote from "./Vote";

export default function Post(props) {
  const commentArray = useContext(postsContext);

  return (
    <ul>
      {commentArray.map((comment, index) => {
        return (
          <div className="commentContainer">
            <li key={index} className="Comment">
              <div className="userName">{comment.formData.userName}</div>
              <div className="userText">{comment.formData.text}</div>
            </li>
            <Vote/>
          </div>
        );
      })}
    </ul>
  );
}
