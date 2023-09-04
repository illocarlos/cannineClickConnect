import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};


function MyComponent({ location }) {


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        //llevar la apy key al .env
        googleMapsApiKey: "AIzaSyDEfioKfYGi6udaByyFEojQ4p3fvjcP00Q"
    });


    const center = {
        lat: 40.39320454495474,
        lng: -3.6980923636579637,
    };



    const [map, setMap] = useState(null);
    const [markerPosition, setMarkerPosition] = useState(center);


    const onLoad = React.useCallback(function callback(map) {

        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

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
                <MarkerF position={markerPosition} />

            </GoogleMap>

        </div>
    ) : <></>;
}

export default React.memo(MyComponent);