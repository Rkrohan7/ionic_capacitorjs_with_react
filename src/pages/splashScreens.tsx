import React, { useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Home from './Home';
import Register from './Register';
import { SplashScreen } from '@capacitor/splash-screen';

const SplashScreens: React.FC = () => {
    useEffect(() => {
        const showSplash = async () => {
            await SplashScreen.show({
                showDuration: 1000,
                autoHide: true,
            });
        };

        showSplash();
    }, []);

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path="/home" component={Home} exact />
                        <Route path="/location" component={Register} exact />
                        <Redirect exact from="/" to="/home" />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                           previos
                        </IonTabButton>
                        <IonTabButton tab="location" href="/location">
                           next
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
};

export default SplashScreens;
