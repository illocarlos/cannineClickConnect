import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Geocode from "react-geocode";

const ParksAutocomplete = ({ parkData, setParkData }) => {

    const [value, setValue] = useState()
    Geocode.setApiKey("AIzaSyDEfioKfYGi6udaByyFEojQ4p3fvjcP00Q")

    value && Geocode
        .fromAddress(value.label)
        .then((response) => {
            const { lat, lng } = response.results[0].geometry.location
            setParkData({ ...parkData, location: { type: 'Point', coordinates: [lng, lat] }, address: value.label })
            setValue(undefined)
        },
            (error) => {
                console.error(error);
            }
        );

    return (
        <div>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyDEfioKfYGi6udaByyFEojQ4p3fvjcP00Q"
                selectProps={{
                    value,
                    onChange: setValue,
                }}
            />
        </div>
    );
}
export default ParksAutocomplete