import React, { useState, useEffect, useContext, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import ReplyInput from "./ReplyInput";
import Vote from "./Vote";
import { postsContext } from "../App";
import "../css/Reply.css";

export const replyContext = createContext(null);

export default function Reply({parentId, depth}) {
  const [replyBool, toggleReply] = useState(false);
  const [submitted, toggleSubmit] = useState(false);
  const {replies, updateReplies} = useContext(postsContext);
  const [reply, updateReply] = useState({ userName: "", content: "", parentId: ""});

  useEffect(()=>{
    console.log(replies);
  },[reply]);

  if (depth === 0) {
    return;
  }

  const displayReply = () => {
    toggleReply(!replyBool);
  };

  let replyId;
  return (
      <replyContext.Provider value={{reply, updateReply}}>
      <div className="ReplyContainer">
        {submitted ? null : (
          <button className="replyButton" onClick={displayReply}>
            Reply <FontAwesomeIcon icon={faCommentDots} />
          </button>
        )}
        {replyBool && !submitted ? (
          <ReplyInput parentId={parentId} toggle={{ submitted, toggleSubmit }} />
        ) : null}
        {submitted ? (
          <div className="reply">
            {replies.filter((element) => {
              return element.formData.parentId === parentId
            })
            .map((element) => {
              console.log(element);
              replyId = Math.random().toString(36).substring(2, 9);
              return (
                <React.Fragment key={"Reply-" + replyId}>
                <div className="newReply">
                <div className="replyChunk">
                  <div className="userName">{element.formData.userName}</div>
                  <div className="userText">{element.formData.content}</div>
                  <div></div>
                </div>
                <Reply parentId={parentId} depth={depth - 1}/>
                </div>
                <Vote/>
                </React.Fragment>
              );
            })}
          </div>
        ): null}
      </div>
      </replyContext.Provider>
  );
}
