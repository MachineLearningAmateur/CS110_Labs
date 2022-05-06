import React, { useState, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import ReplyInput from "./ReplyInput";
import "../css/Reply.css";

export const replyContext = createContext(null);

export default function Reply() {
  const [replyBool, toggleReply] = useState(false);
  const [submitted, toggleSubmit] = useState(false);

  const [reply, updateReply] = useState({ userName: "", content: "" });
  const [replies, updateReplies] = useState([]);

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
      </div>
    </replyContext.Provider>
  );
}
