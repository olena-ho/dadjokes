import "./style.css";
import { useState } from "react";


export const HomePage = () => {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);


  const avatar =
    "https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png";


  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={avatar} />
            <p className="user-name">Neroxx</p>
          </div>


          <p className="joke__text">
            The secret service isn&apos;t allowed to yell &quot;Get down!&quot; anymore when the president is about to be attacked. Now they have to yell &quot;Donald, duck!&quot;
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setLikesCount(likesCount + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likesCount}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setDislikesCount(dislikesCount + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikesCount}
          </span>
        </div>
      </div>
    </div>
  );
};
