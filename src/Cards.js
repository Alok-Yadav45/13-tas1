import React from 'react';
import Card from './Card'

function Cards(props) {
    return (
        <div className="cards-container">
            {props.cardData.map((card) => (
                <Card title={card.title} text={card.text} img={card.img} />
            ))}
        </div>
    );
}

export default Cards;