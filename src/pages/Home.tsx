import React, { useEffect, useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';

interface Plan {
    id: number;
    planName: string;
    price: number;
    cgst: number;
    sgst: number;
    transactionFee: number;
    durationIdDays: number;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    active: boolean;
}

const Home: React.FC = () => {
    const [plans, setPlans] = useState<Plan[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWJJZCI6Miwic3ViIjoidXNlciIsImV4cCI6MTcwNTU2MTg0OSwiYXV0aCI6IlJPTEVfVVNFUiIsImlhdCI6MTcwNTQ3NTQ0OX0.6Sq-eYFDGpBNRTDAueg9Nq5sQHjJeUd4_QVb436foFGiDLeQfos3Z6ZV8h9SIksTKwRzFOHw9GB0b4Hs2eDR8A';
                const response = await axios.get('http://192.168.1.17:8080/api/plans', {
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                    },
                });
                
                setPlans(response.data);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Multigenesys software pvt ltd</IonTitle>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {plans.map(plan => (
                    <IonCard key={plan.id}>
                        <p className="ion-text-center">Plan Name: {plan.planName}</p>
                        <p className="ion-text-center">Price: {plan.price}</p>
                        <p className="ion-text-center">CGST: {plan.cgst}</p>
                        <p className="ion-text-center">SGST: {plan.sgst}</p>
                        <IonButton expand='block'>upgrade</IonButton>
                    </IonCard>
                ))}

                
            </IonContent>
        </IonPage>
    );
};

export default Home;
