import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventCardList from './EventCardList.jsx';
import './EventList.css'; // Asegúrate de tener tu archivo CSS importado aquí


const EventList = ({ events }) => {
    return (
        <div className="event-list">
            <Carousel
                className='carEvent'
                showArrows={true} // Muestra flechas de navegación
                infiniteLoop={true} // Bucle infinito
                showStatus={false} // No muestra el estado del carrusel
                showThumbs={false} // No muestra miniaturas
                emulateTouch={true} // Habilita el control táctil
                centerMode={true} // Modo centrado
                centerSlidePercentage={25}
                interval={2000}
                autoPlay={true}

            >

                {events.map((elm, index) => (

                    <EventCardList key={index} {...elm} />

                ))}

            </Carousel>
        </div>
    );
};

export default EventList;






