import React, { useContext } from "react";
import { replyContext } from "./Reply";


export default function ReplyInput(props) {
  const {reply, updateReply, replies, updateReplies} = useContext(replyContext);

  const handleReply = async (formData) => {
    if (formData.userName.replace(/\s+/g, '') === "" || formData.content.replace(/\s+/g, '') === "") {
        return;
    }
    // props.toggleReply(!reply);
    updateReplies([...replies, {formData}])
    props.toggle.toggleSubmit(true);
  };

  return (
    <form className="content" onSubmit={(event)=> {
        event.preventDefault();
        handleReply(reply)}}>
      <input
        maxLength="30"
        className="name"
        placeholder="Name"
        value={reply.userName}
          onChange={(event) => {
            updateReply({ ...reply, userName: event.target.value }); //modifies userName and keeps everything else the same in comment
          }}
      ></input>
      <textarea
        className="text"
        placeholder="Give us your thoughts!"
          value={reply.reply}
          onChange={(event) => {
            updateReply({ ...reply, content: event.target.value });
          }}
      ></textarea>
      <button className="submit">Submit</button>
    </form>
  );
}
