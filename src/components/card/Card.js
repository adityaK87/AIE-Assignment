import React from "react";
import "./Card.css";
const Card = ({ heading, quantity }) => {
	return (
		<main className='cardContainer'>
			<p className='cardHeading'>{heading}</p>
			<p className='cardQuantity'>{quantity}</p>
		</main>
	);
};

export default Card;
