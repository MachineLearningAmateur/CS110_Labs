import React, { useEffect } from "react";

export default function ReplyInput({reply, replies, updateReply, updateReplies, toggle}) {

  const handleReply = async (formData) => {
    if (formData.userName.replace(/\s+/g, '') === "" || formData.content.replace(/\s+/g, '') === "") {
        console.log('check');
        return;
    }
    updateReply({userName:"", content: ""});
    updateReplies([...replies, {formData}])
    toggle.toggleSubmit(true);
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
          value={reply.content}
          onChange={(event) => {
            updateReply({ ...reply, content: event.target.value });
          }}
      ></textarea>
      <button className="submit">Submit</button>
    </form>
  );
}
