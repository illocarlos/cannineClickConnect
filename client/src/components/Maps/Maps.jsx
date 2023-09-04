import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import Loader from './../Loader/Loader'



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
        lat: location?.cordinates[0],
        lng: location?.cordinates[1],
    };

    const [map, setMap] = useState(null);


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
                <MarkerF position={center} />

            </GoogleMap>

        </div>
    ) : <Loader />;
}

export default React.memo(MyComponent);