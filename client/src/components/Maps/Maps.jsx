import React, { useState } from 'react';

import { useEffect } from 'react';


const containerStyle = {
    width: '400px',
    height: '400px'
};


function MyComponent({ locations } = { locations: [] }) {


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        //llevar la apy key al .env
        googleMapsApiKey: "AIzaSyDEfioKfYGi6udaByyFEojQ4p3fvjcP00Q"
    });



    const center = {
        lat: event.location?.coordinates[1],
        lng: event.location?.coordinates[0]
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDEfioKfYGi6udaByyFEojQ4p3fvjcP00Q&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center,
            zoom: 15,
        });

<<<<<<< HEAD
        new window.google.maps.Marker({
            position: center,
            map,
        });
    }
    return (<div id="map" style={containerStyle} />)
=======
    const zoomLevel = 14

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoomLevel}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {locations.map(location => {
                    const center = {
                        lat: location?.cordinates[0],
                        lng: location?.cordinates[1],
                    };

                    return <MarkerF position={center} />
                })}


            </GoogleMap>

        </div>
    ) : <Loader />;
>>>>>>> 5b5ee003ffbe8e867847f5b3eca162850fc96c19
}
export default Maps