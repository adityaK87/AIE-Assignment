import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({ question, options }) => {
	return (
		<main className='questionCard'>
			<p className='questionText'>{question}</p>
			<ul>
				{options.map((option) => {
					return <li className='listItem'>{option}</li>;
				})}
			</ul>
		</main>
	);
};

export default QuestionCard;
