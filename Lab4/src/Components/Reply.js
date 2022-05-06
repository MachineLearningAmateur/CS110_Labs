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

  return (
    <replyContext.Provider
      value={{ reply, updateReply, replies, updateReplies }}
    >
      <div>
        {submitted ? null : (
          <button className="replyButton" onClick={displayReply}>
            Reply <FontAwesomeIcon icon={faCommentDots} />
          </button>
        )}
        {replyBool && !submitted ? (
          <ReplyInput toggle={{ submitted, toggleSubmit }} />
        ) : null}
        {submitted ? (
          <div>
            {replies.map((element) => {
              return (
                <div className="commentContainer">
                <div className="Comment">
                  <div className="userName">{element.formData.userName}</div>
                  <div className="userText">{element.formData.content}</div>
                  <Reply depth={depth - 1}/>
                </div>
                <Vote/>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </replyContext.Provider>
  );
}
