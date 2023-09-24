import React from "react";
import Selector from "../selector/Selector";
import "./CreateExam.css";
import { AiFillDelete } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import Button from "../button/Button";
import RigthtSidebar from "../createquiz/RigthtSidebar";

const CreateExam = () => {
	let languages = ["English", "Hindi"];
	let classes = ["6th", "7th"];
	let subjects = ["Science", "Maths"];
	let topic = ["Topic 1", "Topic 2"];
	let level = ["level 1", " level 2"];
	let perQuestionTime = ["1min"];
	let testDuration = ["1 Hour", "2 Hours", "3 Hours", "4 Hours"];

	let questionType = ["Type 1", "Type 2"];
	return (
		<main className='examContainer'>
			<section>
				<h2>Create exam</h2>
				<div className='languages'>
					<Selector fields={languages} title={"Languages"} />
				</div>
				<div className='subjects'>
					<Selector fields={classes} title={"Class"} />
					<Selector fields={subjects} title={"Subjects"} />
					<Selector fields={topic} title={"Topic"} />
					<Selector fields={level} title={"Level"} />
					<Selector
						fields={perQuestionTime}
						title={"Per question time"}
					/>
					<Selector fields={testDuration} title={"Test duration"} />
				</div>
				<section className='examTextarea'>
					<article className='examInstruction'>
						<span>Instruction</span>
						<span>Eligibility</span>
						<span>Learning</span>
					</article>
					<textarea
						className='examText'
						name='examInstruction'
						id=''
						cols='50'
						rows='10'></textarea>
				</section>
				<div className='questionType'>
					<Selector fields={questionType} title='Question type' />
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
					</article>
					<p className='addNewQuestion'>Add another option</p>
				</section>
				<section className='buttonComponent'>
					<Button title='Add' />
				</section>
			</section>
			<section>
				<RigthtSidebar />
			</section>
		</main>
	);
};

export default CreateExam;
