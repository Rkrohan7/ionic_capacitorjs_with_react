import React, { useState } from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonRouter,
    IonToast,
} from '@ionic/react';
import { logInOutline, personCircle } from 'ionicons/icons';
import logo from '../assets/multigenesys_logo.jpeg';
import axios from 'axios';

const inData = {
    username: '',
    password: '',
};

const Login: React.FC = () => {
    const router = useIonRouter();
    const [formData, setFormData] = useState(inData);
    const [showErrorToast, setShowErrorToast] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.username || !formData.password) {
            setShowErrorToast(true);
            return;
        }

        const data = {
            username: formData.username,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://192.168.1.17:8080/api/authenticate', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.status);

            if (response.status === 200) {
                setFormData(inData);
                router.push('/home');
            }else{
                window.location.reload();
            }

            console.log(response);
        } catch (error) {
            console.error('An error occurred during login', error);
            setShowErrorToast(true);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="success">
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
                <div className="ion-text-center ion-padding">
                    <img src={logo} width="50%" alt="Multigenesys Logo" />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={handleLogin}>
                            <IonInput
                                mode="md"
                                label="Username"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Enter username"
                                value={formData.username}
                                onIonChange={(e) => setFormData({ ...formData, username: e.detail.value! })}
                            ></IonInput>
                            <IonInput
                                mode="md"
                                label="Password"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Enter password"
                                type="password"
                                className="ion-margin-top"
                                value={formData.password}
                                onIonChange={(e) => setFormData(prevState => ({ ...prevState, password: e.detail.value! }))}
                            ></IonInput>
                            <IonButton type="submit" expand="block" className="ion-margin-top">
                                Login
                                <IonIcon icon={logInOutline} slot="end" />
                            </IonButton>
                            <IonButton type="button" color="secondary" expand="block" className="ion-margin-top" routerLink="/register">
                                Create Account
                                <IonIcon icon={personCircle} slot="end" />
                            </IonButton>
                        </form>
                        <IonToast
                            isOpen={showErrorToast}
                            onDidDismiss={() => setShowErrorToast(false)}
                            message="Invalid username or password. Please try again."
                            duration={3000}
                            color="danger"
                        />
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
