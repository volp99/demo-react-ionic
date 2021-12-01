import React from "react";
import style from "./Post.module.sass";
import { heartOutline, chatbubblesOutline, sendOutline } from "ionicons/icons";
import { IonIcon, IonButtons } from "@ionic/react";
import { ellipsisHorizontalOutline } from "ionicons/icons";
import USER_DATA from "../Stories/story";

export const Post: React.FC = () => {
  /*  const [post, setPost]: any = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);*/
  return (
    <>
      <div>
        {USER_DATA.map((user) => (
          <div className={style["container-post"]} key={user.key}>
            <div className={style["card-info"]}>
              <div className={style.user}>
                <img src={user.img} alt={user.alt} />
                <span>{user.username}</span>
              </div>
              <IonIcon
                slot="icon-only"
                size="small"
                icon={ellipsisHorizontalOutline}
              />
            </div>
            <div className={style["post-image"]}>
              <img src={user.post} alt="Post" />
              <div className={style.icons}>
                <IonButtons slot="primary">
                  <IonIcon slot="icon-only" icon={heartOutline} />
                  <IonIcon
                    slot="icon-only"
                    icon={chatbubblesOutline}
                    className={style.icon}
                  />
                  <IonIcon
                    slot="icon-only"
                    icon={sendOutline}
                    className={style.icon}
                  />
                </IonButtons>
              </div>
              <div>
                <span className={style["user-comment"]}>{user.username}: </span>
                <span className={style["comment-text"]}> {user.comment}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
