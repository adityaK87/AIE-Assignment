import React from "react";
import "./Selector.css";

const Selector = ({ fields, title }) => {
	return (
		<select className='dropdown'>
			<option className='dropdown-content' disabled selected>
				{title}
			</option>
			{fields.map((field) => {
				return (
					<option className='dropdown-content' value={field}>
						{field}
					</option>
				);
			})}
		</select>
	);
};

export default Selector;
