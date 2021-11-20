import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";
import {addCircleOutline, heartOutline, sendOutline} from "ionicons/icons";

const Tab1: React.FC = () => {
    return (
        <IonPage>
                <IonToolbar>
                    <IonButtons slot="primary">
                        <IonButton onClick={() => {
                        }}>
                            <IonIcon slot="icon-only" icon={addCircleOutline}/>
                        </IonButton>
                        <IonButton onClick={() => {
                        }}>
                            <IonIcon slot="icon-only" icon={heartOutline}/>
                        </IonButton>
                        <IonButton onClick={() => {
                        }}>
                            <IonIcon slot="icon-only" icon={sendOutline}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Instagram</IonTitle>
                </IonToolbar>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 1 page"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
