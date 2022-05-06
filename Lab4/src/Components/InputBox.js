import "../css/InputBox.css";
import React, { createContext, useState} from "react";
import OutputBox from "./OutputBox";

export const postsContext = createContext(null);

export default function InputBox() {
  const [comment, updateComment] = useState({ userName: "", text: "" });
  const [commentArray, updateArray] = useState([]); //creates a list
//   useEffect(() => {
//     console.log(commentArray);
//   }, [commentArray]);

  const handleSubmit = async (formData) => {
    // event.preventDefault();
    if (formData.userName === "" || formData.text === "") {
      return;
    }

    updateArray([...commentArray, { formData }]);
    let copy = { ...comment };
    copy.userName = "";
    copy.text = "";
    updateComment(() => ({ ...copy }));
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
          maxlength="30"
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
    <postsContext.Provider value={commentArray}>
    <OutputBox/>
    </postsContext.Provider>
    </div>
  );
}
