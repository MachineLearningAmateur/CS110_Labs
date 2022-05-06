import React, {useState} from "react";
import "../css/Vote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/fontawesome-free-solid"; 

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
       <FontAwesomeIcon className="vote" onClick={upVote} icon={faArrowUp} />
        <div className="voteCount">
            {vote}
        </div>
        <FontAwesomeIcon className="vote" onClick={downVote} icon={faArrowDown} />
    </div>
  )
}
