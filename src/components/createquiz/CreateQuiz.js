import React from "react";
import "./CreateQuiz.css";
import Selector from "../selector/Selector";
import { AiFillDelete } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import Button from "../button/Button";
import RigthtSidebar from "./RigthtSidebar";

const CreateQuiz = () => {
	let languages = ["English", "Hindi"];
	let classes = ["6th", "7th"];
	let subjects = ["Science", "Maths"];
	let topic = ["Topic 1", "Topic 2"];
	let level = ["level 1", " level 2"];
	let subTopic = ["SubTopic 1", " SubTopic 2"];
	let quizType = ["quizType 1", " quizType 2"];

	return (
		<main className='createQuiz'>
			<section>
				<h2>Create quiz</h2>
				<div className='languages'>
					<Selector fields={languages} title={"Languages"} />
				</div>
				<div className='subjects'>
					<Selector fields={classes} title={"Class"} />
					<Selector fields={subjects} title={"Subjects"} />
					<Selector fields={topic} title={"Topic"} />
					<Selector fields={subTopic} title={"Sub topic"} />
					<Selector fields={level} title={"Level"} />
					<Selector fields={quizType} title={"Quiz Type"} />
				</div>

				{/* create Question */}
				<section className='questionContainer'>
					<h2>Question</h2>
					<div>
						<input
							type='text'
							className='questionInput'
							placeholder='Question'
						/>
						<span className='icon'>
							<BiImageAdd />
						</span>
					</div>
					<h2>Options:</h2>
					<article>
						<div className='optionContainer'>
							<input
								type='radio'
								className='inputOption'
								id='Option A'
								name='Option A'
								value='Option A'
								checked
							/>
							<label for='huey' className='optionText'>
								Option A
							</label>
							<span className='icon'>
								<BiImageAdd />
								<AiFillDelete />
							</span>
						</div>
						<div className='optionContainer'>
							<input
								type='radio'
								className='inputOption'
								id='Option A'
								name='Option A'
								value='Option A'
								checked
							/>
							<label for='huey' className='optionText'>
								Option A
							</label>
							<span className='icon'>
								<BiImageAdd />
								<AiFillDelete />
							</span>
						</div>
						<div className='optionContainer'>
							<input
								type='radio'
								className='inputOption'
								id='Option A'
								name='Option A'
								value='Option A'
								checked
							/>
							<label for='huey' className='optionText'>
								Option A
							</label>
							<span className='icon'>
								<BiImageAdd />
								<AiFillDelete />
							</span>
						</div>
						<div className='optionContainer'>
							<input
								type='radio'
								className='inputOption'
								id='Option A'
								name='Option A'
								value='Option A'
								checked
							/>
							<label for='huey' className='optionText'>
								Option A
							</label>
							<span className='icon'>
								<BiImageAdd />
								<AiFillDelete />
							</span>
						</div>
						<p className='addNewQuestion'>Add another option</p>
					</article>
				</section>
				<section className='buttonComponent'>
					<Button title='Post' />
				</section>
			</section>
			<section>
				<RigthtSidebar />
			</section>
		</main>
	);
};

export default CreateQuiz;
