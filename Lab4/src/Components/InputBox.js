import "../css/InputBox.css";
import React, {useState, useContext} from "react";
import { postsContext } from "../App";

export default function InputBox() {
  const [comment, updateComment] = useState({ userName: "", text: "" });

  const {commentArray, updateArray} = useContext(postsContext);
//   useEffect(() => {
//     console.log(commentArray);
//   }, [commentArray]);

  const handleSubmit = async (formData) => {
    // event.preventDefault();
    if (formData.userName.replace(/\s+/g, '') === "" || formData.text.replace(/\s+/g, '') === "") {
      return;
    }

    updateArray([...commentArray, { formData }]);
    updateComment({userName: "", text: ""});
  };

  //function async handle submit () {}
  return (
    <div>
    <form
      className="container"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(comment);
      }}
    >
      <div className="post">New Post</div>
      <div className="content">
        <input
          maxLength="30"
          className="name"
          placeholder="Name"
          value={comment.userName}
          onChange={(event) => {
            updateComment({ ...comment, userName: event.target.value }); //modifies userName and keeps everything else the same in comment
          }}
        ></input>
        <textarea
          className="text"
          placeholder="Give us your thoughts!"
          value={comment.text}
          onChange={(event) => {
            updateComment({ ...comment, text: event.target.value });
          }}
        ></textarea>
        <button className="submit">Submit</button>
      </div>
    </form>
    {/* <postsContext.Provider value={commentArray}>
    <OutputBox/>
    </postsContext.Provider> */}
    </div>
  );
}
