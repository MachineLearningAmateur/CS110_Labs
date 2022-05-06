import React, { useContext} from "react";
import { postsContext } from "./InputBox";
import "../css/Post.css";
import Vote from "./Vote";
import Reply from "./Reply"

export default function Post(props) {
  const commentArray = useContext(postsContext);

  return (
    <ul>
      {commentArray.map((comment, index) => {
        return (
          <div id={index} className="commentContainer">
            <li className="Comment">
              <div className="userName">{comment.formData.userName}</div>
              <div className="userText">{comment.formData.text}</div>
              <Reply depth={2}/>
            </li>
            <Vote/>
          </div>
        );
      })}
    </ul>
  );
}
