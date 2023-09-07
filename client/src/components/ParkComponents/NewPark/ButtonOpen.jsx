import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const ButtonOpen = ({ handleOpenStatus }) => {


    const [openValue, setOpenValue] = useState('open');

    const boleOpen = [
        { name: "open", value: true },
        { name: "close", value: false },
    ];

    const inputValue = (inputValue) => {
        handleOpenStatus(inputValue)
    }

    return (

        <ButtonGroup className='d-flex mb-2'>
            {boleOpen.map((bolean, idx) => (
                <ToggleButton

                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="open"
                    value={bolean.value}
                    checked={openValue === bolean.value}
                    onClick={() => inputValue(bolean.value)}
                >
                    {bolean.name}
                </ToggleButton>
            ))
            }
        </ButtonGroup >

    )
}
export default ButtonOpen