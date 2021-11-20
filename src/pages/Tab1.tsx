import {
    IonButton,
    IonButtons,
    IonContent,
    IonIcon,
    IonPage,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";
import {addCircleOutline, heartOutline, sendOutline} from "ionicons/icons";
import { IonGrid, IonRow, IonCol } from '@ionic/react';


const Tab1: React.FC = () => {
    return (
        <IonPage>
                <IonToolbar>
                    <IonGrid className="ion-padding-bottom">
                        <IonRow>
                            <IonCol>
                                <h2>Instagram</h2>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
               <IonButtons slot="primary">
                        <IonButton onClick={() => {
                        }}>
                            <IonIcon slot="icon-only"  icon={addCircleOutline}/>
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
                </IonToolbar>
            <IonContent fullscreen>
                <ExploreContainer name="Tab 1 page"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
