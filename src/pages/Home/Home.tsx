import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonPage,
  IonToolbar,
  IonHeader,
} from "@ionic/react";
import React from "react";
import { addCircleOutline, heartOutline, sendOutline } from "ionicons/icons";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import Stories from "./Stories/Stories";
import { Post } from "./Post/Post";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid className="ion-padding-bottom">
            <IonRow>
              <IonCol>
                <h2>Instagram</h2>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonButtons slot="primary">
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={addCircleOutline} />
            </IonButton>
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={heartOutline} />
            </IonButton>
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={sendOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent fullscreen>
          <Stories />
          <Post />
        </IonContent>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
