import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Location: React.FC = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    
    const printCurrentPosition = async () => {
        try {
            const coordinates = await Geolocation.getCurrentPosition();
            setLatitude(coordinates.coords.latitude);
            setLongitude(coordinates.coords.longitude);
            const addressData = await fetchAddress(coordinates.coords.latitude, coordinates.coords.longitude);
            setAddress(addressData.display_name);

            console.log('Current position:', coordinates);
        } catch (error) {
            console.error('Error getting current position:', error);
        }
    };
    

    const fetchAddress = async (latitude: number, longitude: number): Promise<any> => {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        if (latitude && longitude) {
            const map = L.map('map').setView([latitude, longitude], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            L.marker([latitude, longitude]).addTo(map)
               
        }
    }, [latitude, longitude]);


    return (
        <IonPage>
            <IonHeader>
            <IonToolbar color={'success'}>
                    <IonTitle>Location</IonTitle>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButtons className="ion-text-center" onClick={printCurrentPosition}>click here for the location</IonButtons>
            {latitude && longitude && (
                    <div className='ion-margin-top'>
                        <strong>Latitude:</strong> {latitude}<br />
                        <strong>Longitude:</strong> {longitude}<br />
                        <strong>Address:</strong> {address}
                    </div>
                )}
                <div id="map" style={{ height: '800px' }} />
                {latitude && longitude && (
                   <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '300px' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='© OpenStreetMap contributors'
                        />
                        <Marker position={[latitude, longitude]}>
                     
                        </Marker>
                    </MapContainer>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Location;