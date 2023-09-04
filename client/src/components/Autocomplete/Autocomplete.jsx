import React, { useState } from 'react';
import { GoogleAutoComplete } from 'react-google-autocomplete';


const AddressInput = ({ onPlaceSelected }) => {

    const [value, setValue] = useState('');

    return (
        <div>
            <GoogleAutoComplete
                placeholder="Busca una dirección"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                onPlaceSelected={onPlaceSelected}
            />
        </div>
    );
};


export default AddressInput;