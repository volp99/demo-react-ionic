import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  home,
  searchSharp,
  videocam,
  bagHandle,
  personCircle,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Shop from "./pages/Shop/Shop";
import Account from "./pages/Account/Account";
import Reel from "./pages/Reel/Reel";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route path="/Reel">
            <Reel />
          </Route>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/Account">
            <Account />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/Home">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Search">
            <IonIcon icon={searchSharp} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/Reel">
            <IonIcon icon={videocam} />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/Shop">
            <IonIcon icon={bagHandle} />
          </IonTabButton>
          <IonTabButton tab="tab5" href="/Account">
            <IonIcon icon={personCircle} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
