import React from 'react';
import './Card.css'; 
import {Button} from './Button.component';

const Card = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <Button primary size="medium">Comprar</Button>
      </div>
    </div>
  );
};

export default Card;
