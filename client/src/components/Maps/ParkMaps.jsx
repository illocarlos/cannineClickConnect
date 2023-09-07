import React, { useState } from 'react';

import { useEffect } from 'react';

const ParkMaps = ({ park }) => {

    const containerStyle = {
        width: '400px',
        height: '400px',
    };

    const center = {
        lat: park.location?.coordinates[1],
        lng: park.location?.coordinates[0]
    };
    console.log(center)

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
    }, [center], {
        delay: 500
    });

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center,
            zoom: 15,
        });

        new window.google.maps.Marker({
            position: center,
            map,
        });
    }
    return (<div id="map" style={containerStyle} />)
}
export default ParkMaps