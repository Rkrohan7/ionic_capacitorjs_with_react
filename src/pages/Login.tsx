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
} from '@ionic/react';
import { logInOutline, personCircle } from 'ionicons/icons';
import logo from '../assets/multigenesys_logo.jpeg';
import axios from 'axios';

const inData = {
    username: "",
    password: "",
}
const Login: React.FC = () => {
    const router = useIonRouter();
    const [formData, setFormData] = useState(inData);

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();

//         const data = {
//             username: formData.username,
//             password: formData.password,

//         }
//         console.log(formData.username);
//         console.log(formData.password);

//         try {
//             const response = await axios.post('http://192.168.1.12:8080/api/authenticate', data, {
//                 headers: {
//                        'Content-Type': 'application/json',
//                 },
//             });

//             if(response.status===200){
//        router.push('/home');
//             }

// console.log(response);

//         } catch (error) {
//             console.error('An error occurred during login', error);
//         }

//   // 'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTcwNTQwNDU4MX0.H73_EB8MASW3O2D4XxxOdQ_DpiQD2R0F6Ec-YJOFa0KQH-RKscrz71LmtmqXboMcxj9NyC8sDJRZdULnppsSxw`,
               
//         // console.log(response);

//         // if (response.status === 200) {
//         //     const data = response.data;
//         //     console.log('Login successful', data);
//         //     // router.push('/home');
//         // } else {
//         //     console.error('Login failed', response.statusText);
//         // }

//     };

const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
        username: formData.username,
        password: formData.password,
    };

    console.log(formData.username);
    console.log(formData.password);

    try {
        const response = await axios.post('http://192.168.1.12:8080/api/authenticate', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response.status);
        
        if (response.status === 200) {
           
            router.push('/home');
        }

        console.log(response);

    } catch (error) {
        console.error('An error occurred during login', error);
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
                                onIonChange={(e) => setFormData({ ...formData, password: e.detail.value! })}
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
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
