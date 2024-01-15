import { Camera, CameraResultType } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneCircleOutline, logInOutline, personCircle } from 'ionicons/icons';
import React, { useState } from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();
    const [image, setImage] = useState<any>(null);

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log("Register done");
        router.push('/', 'root');
    }
    const takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Base64
        });

        const img = `data:image/jpeg;base64,${image.base64String}`;
        setImage(img);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Create my account</IonTitle><IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
                <IonCard>
                    <IonCardContent >
                        <form onSubmit={doRegister}>
                            <IonInput mode='md' label="First name" labelPlacement="floating" fill="outline" placeholder="Enter First name"></IonInput>
                            <IonInput mode='md' label="Last name" labelPlacement="floating" fill="outline" placeholder="Enter Last name" className='ion-margin-top'></IonInput>
                            <IonInput mode='md' label="Email" labelPlacement="floating" fill="outline" placeholder="Enter Email" type='email' className='ion-margin-top'></IonInput>
                            <IonInput mode='md' label="Password" labelPlacement="floating" fill="outline" placeholder="Enter password" type='password' className='ion-margin-top'></IonInput>

                            <IonButton expand='block' className='ion-margin-top' onClick={takePicture}>Upload Images</IonButton>

                            <IonButton type='submit' color={'secondary'} expand='block' className='ion-margin-top'>Create my Account
                                <IonIcon icon={checkmarkDoneCircleOutline} slot='end' />
                            </IonButton>

                        </form>

                    </IonCardContent>
                </IonCard>
                <img src={image} />
            </IonContent>
        </IonPage>
    );
};

export default Register;