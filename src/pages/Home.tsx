import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Login from './Login';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle >Multigenesys software pvt ltd</IonTitle>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        wellcome to home page
      </IonContent>
    </IonPage>
  );
};

export default Home;
