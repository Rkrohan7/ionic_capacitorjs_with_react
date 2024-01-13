import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Login from './Login';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle >Multigenesys software pvt ltd</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <Login/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
