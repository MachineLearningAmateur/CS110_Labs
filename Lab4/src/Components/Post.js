import React, { useContext} from "react";
import { postsContext } from "../App";
import "../css/Post.css";
import Vote from "./Vote";
import Reply from "./Reply"

export default function Post() {
  const {commentArray} = useContext(postsContext);

  return (
    <ul>
      {commentArray.map((comment) => {
        // console.log(comment.formData.commentId);
        return (
          <React.Fragment key={"Comment-" + comment.formData.commentId}>
          <div className="commentContainer">
            <li key={"Comment-" + comment.formData.commentId} className="Comment">
              <div className="userName">{comment.formData.userName}</div>
              <div className="userText">{comment.formData.text}</div>
              <Reply parentId={comment.formData.commentId} depth={2}/>
            </li>
            <Vote/>
          </div>
          </React.Fragment>
        );
      })}
    </ul>
  );
}
