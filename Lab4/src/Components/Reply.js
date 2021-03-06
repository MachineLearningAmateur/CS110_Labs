import React, { useState, useContext, createContext } from "react";
import ReplyInput from "./ReplyInput";
import Vote from "./Vote";
import { postsContext } from "../App";
import "../css/Reply.css";
import Button from 'react-bootstrap/Button';

export const replyContext = createContext(null);

export default function Reply({ parentId, depth }) {
  const [replyBool, toggleReply] = useState(false);
  const [submitted, toggleSubmit] = useState(false);
  const { replies } = useContext(postsContext);
  const [reply, updateReply] = useState({
    userName: "",
    content: "",
    parentId: "",
    depth: ""
  });

  if (depth === 2) {
    return;
  }

  const displayReply = () => {
    toggleReply(!replyBool);
  };

  let replyId;
  let currReplies = replies.filter((element) => {
    return element.formData.parentId === parentId;
  });

  return (
    <replyContext.Provider value={{ reply, updateReply }}>
      <div className="ReplyContainer">
        {(
          <div className="reply-button"> 
            <button type="button" className="btn btn-outline-primary" onClick={displayReply} >Reply</button>
          </div>
        )}
        {replyBool ? (
          <ReplyInput
            parentId={parentId}
            depth={depth}
            toggle={{ replyBool, toggleReply, submitted, toggleSubmit }}        
          />
        ) : null}
        {submitted ? (
          <div className="reply">
            {currReplies.map((element) => {
              replyId = Math.random().toString(36).substring(2, 9);
              if (element.formData.depth === depth)
              return (
                <React.Fragment key={"Reply-" + replyId}>
                  <div className="newReply">
                    <div className="replyChunk">
                      <div className="userName">
                        {element.formData.userName}
                      </div>
                      <div className="userText">{element.formData.content}</div>
                      <div></div>
                    </div>
                    <Vote />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
        {!submitted ? null : 
        <Reply parentId={parentId} depth={depth + 1} />
        } 
      </div>
    </replyContext.Provider>
  );
}
