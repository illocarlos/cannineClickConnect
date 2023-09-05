import './ButtonOpen.css'
import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const ButtonCastrated = ({ handleCastratedStatus }) => {


    const [castratedValue, setCastratedValue] = useState('castrated');

    const boleCastrated = [
        { name: "castrated", value: true },
        { name: "Not castrated", value: false },
    ];

    const inputValue = (inputValue) => {
        handleCastratedStatus(inputValue)
    }

    return (
        <ButtonGroup className='ButtonCastrated'>
            {boleCastrated.map((bolean, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="open"
                    value={bolean.value}
                    checked={castratedValue === bolean.value}
                    onClick={() => inputValue(bolean.value)}
                    className="custom-button"
                >
                    {bolean.name}
                </ToggleButton>
            ))}
        </ButtonGroup>


    )
}
export default ButtonCastrated