import React from "react";
import style from "./Stories.module.sass";
import USER_DATA from "./story";

const Stories: React.FC = () => {
  return (
    <>
      <div className={style["story-container"]}>
        {USER_DATA.map((user) => (
          <div key={user.key}>
            <img src={user.img} alt={user.alt} />
            <div className={style.user}>
              <span>{user.username}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Stories;
