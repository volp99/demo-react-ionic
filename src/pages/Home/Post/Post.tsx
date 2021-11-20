import React from "react";
import style from "./Post.module.sass";
import post from "./icon.png";
import { IonIcon } from "@ionic/react";
import { ellipsisHorizontalOutline } from "ionicons/icons";

export const Post: React.FC = () => {
  return (
    <div className={style["container-post"]}>
      <div className={style["card-info"]}>
        <img src={post} alt="Post" />
        <span>Mario Rossi</span>
        <IonIcon
          slot="icon-only"
          size="small"
          icon={ellipsisHorizontalOutline}
        />
      </div>
    </div>
  );
};
