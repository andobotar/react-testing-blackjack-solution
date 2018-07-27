import React from 'react';

const Card = ({ face }) => {

    let cardUrl = "images/" + face + ".png";

    return(
        <div className="card">
            <img src={cardUrl} alt="card" />
        </div>
    )
};

export default Card;