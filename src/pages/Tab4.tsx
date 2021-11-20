import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage, IonSearchbar,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import React from "react";
import {bookmarkOutline} from "ionicons/icons";

const Tab4: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="primary">
                        <IonButton onClick={() => {}}>
                            <IonIcon slot="icon-only" icon={bookmarkOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Shop</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton autoHide={false} />
                    </IonButtons>
                </IonToolbar>
                <IonSearchbar placeholder="Cerca"/>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 4</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 4 page"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab4;
