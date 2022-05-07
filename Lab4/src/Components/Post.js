import React, { useContext} from "react";
import { postsContext } from "../App";
import "../css/Post.css";
import Vote from "./Vote";
import Reply from "./Reply"

export default function Post() {
  const {commentArray, updateArray} = useContext(postsContext);
  let commentId;

  return (
    <ul>
      {commentArray.map((comment) => {
        commentId = Math.random().toString(36).substring(2, 9);
        return (
          <React.Fragment key={"Comment-" + commentId}>
          <div className="commentContainer">
            <li key={"Comment-" + commentId} className="Comment">
              <div className="userName">{comment.formData.userName}</div>
              <div className="userText">{comment.formData.text}</div>
              <Reply depth={2}/>
            </li>
            <Vote/>
          </div>
          </React.Fragment>
        );
      })}
    </ul>
  );
}
