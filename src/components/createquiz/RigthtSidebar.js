import React from "react";
import Card from "../card/Card";
import QuestionCard from "../questionCard/QuestionCard";

const RigthtSidebar = () => {
	const questions = [
		{
			question:
				"Tadoba national park known for sheltering tiger, panther and bear is located in: ",
			options: ["Assam", "Chandrapur", "Karnataka", " Tamil Nadu"],
		},
		{
			question:
				"Tadoba national park known for sheltering tiger, panther and bear is located in: ",
			options: ["Assam", "Chandrapur", "Karnataka", " Tamil Nadu"],
		},
	];
	return (
		<main className='rightSidebarContainer'>
			<Card heading={"Total question"} quantity={50000} />
			<h1>Preview</h1>
			<QuestionCard
				question={questions[0].question}
				options={questions[0].options}
			/>
			<QuestionCard
				question={questions[1].question}
				options={questions[1].options}
			/>
		</main>
	);
};

export default RigthtSidebar;
