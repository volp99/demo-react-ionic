import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Account.module.sass";
import React from "react";
import { addCircleOutline } from "ionicons/icons";

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid className="ion-padding-bottom">
            <IonRow>
              <IonCol>
                <h2>stefanovolpatti</h2>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonButtons slot="primary">
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={addCircleOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/*  <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 5</IonTitle>
                    </IonToolbar>
                </IonHeader>*/}
        <ExploreContainer name="Tab 5 page" />
      </IonContent>
    </IonPage>
  );
};

export default Account;
