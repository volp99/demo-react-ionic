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
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Shop.module.sass";
import React from "react";
import { bookmarkOutline } from "ionicons/icons";

const Shop: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid className="ion-padding-bottom">
            <IonRow>
              <IonCol>
                <h2>Shop</h2>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonButtons slot="primary">
            <IonButton onClick={() => {}}>
              <IonIcon slot="icon-only" icon={bookmarkOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
        </IonToolbar>
        <IonSearchbar placeholder="Cerca" />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          {/*  <IonToolbar>
                        <IonTitle size="large">Tab 4</IonTitle>
                    </IonToolbar>*/}
        </IonHeader>
        <ExploreContainer name="Tab 4 page" />
      </IonContent>
    </IonPage>
  );
};

export default Shop;
