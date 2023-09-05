import React, { useState } from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const AddressInput = ({ onPlaceSelected }) => {

    const [value, setValue] = useState('');

    const handleSelect = async (place) => {
        try {
            const results = await geocodeByAddress(place.label);
            const latLng = await getLatLng(results[0]);
            onPlaceSelected({ label: place.label, latLng });
        } catch (error) {
            console.error('Error al obtener las coordenadas:', error);
        }
    };

    return (
        <div>
            <GooglePlacesAutocomplete
                selectProps={{
                    place,
                    onChange: setPLace
                }}
                apiKey="AIzaSyCIkt_MWj32EbnKrxghvdDSFRzxDfC4uMs"
            />
        </div>
    );
};

export default AddressInput;
