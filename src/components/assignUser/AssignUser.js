import React from "react";
import "./AssignUser.css";
import Selector from "../selector/Selector";
import Button from "../button/Button";
import RightSiderbar from "./RightSiderbar";
const AssignUser = () => {
	let languages = ["English", "Hindi"];
	let classes = ["6th", "7th"];
	let subjects = ["Science", "Maths"];
	let topic = ["Topic 1", "Topic 2"];
	let SelectUser = ["User 1", "User 2"];
	return (
		<main className='assignUserContainer'>
			<section>
				<h2 className='create'>Create Quiz </h2>
				<section className='assignUser'>
					<Selector fields={languages} title='Languages' />
					<Selector fields={classes} title='Class' />
					<Selector fields={subjects} title='Subject' />
					<Selector fields={topic} title='Topic' />
					<Selector fields={SelectUser} title='Select User' />
				</section>
				<section className='buttonComponent'>
					<Button title='Post' />
				</section>
			</section>
			<section>
				<RightSiderbar />
			</section>
		</main>
	);
};

export default AssignUser;
