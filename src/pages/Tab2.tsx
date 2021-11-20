import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React, {useState} from "react";
import {locationOutline} from "ionicons/icons";

const Tab2: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>
                <IonToolbar>
                    <IonButtons slot="primary">
                        <IonButton onClick={() => {
                        }}>
                            <IonIcon slot="icon-only" icon={locationOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}
                                  placeholder="Cerca"/>
                </IonToolbar>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 2 page"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
