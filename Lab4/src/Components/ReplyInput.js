import React, { useContext } from "react";
import { postsContext } from "../App";
import { replyContext } from "./Reply";

export default function ReplyInput({parentId, depth, toggle}) {
  // const [reply, updateReply] = useState({ userName: "", content: "", parentId: ""});
  const {reply, updateReply} = useContext(replyContext);
  const {replies, updateReplies} = useContext(postsContext);

  const handleReply = async (formData) => {
    if (formData.userName.replace(/\s+/g, '') === "" || formData.content.replace(/\s+/g, '') === "") {
        return;
    }
    formData.parentId = parentId;
    formData.depth = depth;
    updateReplies([...replies, {formData}]);
    updateReply({userName: "", content: "", parentId: ""});
    toggle.toggleReply(!toggle.replyBool);
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
