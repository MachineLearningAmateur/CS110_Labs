import React, { useState, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import ReplyInput from "./ReplyInput";
import Vote from "./Vote";

import "../css/Reply.css";

export const replyContext = createContext(null);

export default function Reply({depth}) {
  const [replyBool, toggleReply] = useState(false);
  const [submitted, toggleSubmit] = useState(false);
  const [reply, updateReply] = useState({ userName: "", content: "" });
  const [replies, updateReplies] = useState([]);

  if (depth === 0) {
    return;
  }

  const displayReply = () => {
    toggleReply(!replyBool);
  };

  let replyId;
  return (
    <replyContext.Provider value={{reply, updateReply, replies, updateReplies}}>
      <div className="ReplyContainer">
        {submitted ? null : (
          <button className="replyButton" onClick={displayReply}>
            Reply <FontAwesomeIcon icon={faCommentDots} />
          </button>
        )}
        {replyBool && !submitted ? (
          <ReplyInput toggle={{ submitted, toggleSubmit }} />
        ) : null}
        {submitted ? (
          <div className="reply">
            {replies.map((element) => {
              replyId = Math.random().toString(36).substring(2, 9);
              return (
                <React.Fragment key={"Reply-" + replyId}>
                <div className="newReply">
                <div className="replyChunk">
                  <div className="userName">{element.formData.userName}</div>
                  <div className="userText">{element.formData.content}</div>
                  <div></div>
                </div>
                <Reply depth={depth - 1}/>
                </div>
                <Vote/>
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
      </div>
      </replyContext.Provider>
  );
}
