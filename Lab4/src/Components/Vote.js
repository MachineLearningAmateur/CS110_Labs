import React, {useState} from "react";
import "../css/Vote.css";

export default function Vote() {
  const [vote, changeVote] = useState(0);

  const upVote = () => {
    changeVote(vote + 1);
  };
  
  const downVote = () => {
      changeVote(vote - 1);
  }

  return (
    <div>
        <button onClick={upVote}>
            ^
        </button>
        <div>
            {vote}
        </div>
        <button onClick={downVote}>
            v
        </button>
    </div>
  )
}
