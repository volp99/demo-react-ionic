import {
    IonCol,
    IonContent, IonGrid,
    IonPage, IonRow,
    IonSearchbar,
    IonToolbar,
    IonHeader,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React, {useState} from "react";

const Tab2: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Cerca"/>

                            </IonCol>
                        </IonRow>
                    </IonGrid>
                {/*    <IonButtons slot="primary" className="ion-align-items-center">
                        <IonButton onClick={() => {
                        }}>
                            <IonIcon slot="icon-only" className="ion-padding-bottom" icon={locationOutline} />
                        </IonButton>
                    </IonButtons>*/}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <ExploreContainer name="Tab 2 page"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
