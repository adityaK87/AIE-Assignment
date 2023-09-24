import React from "react";
import { Routes, Route } from "react-router-dom";
import AssignUser from "../components/assignUser/AssignUser";
import CreateExam from "../components/exam/CreateExam";
import SideBar from "../components/sidebar/SideBar";
import CreateQuiz from "../components/createquiz/CreateQuiz";

const Routers = () => {
	return (
		<main
			className=''
			style={{
				display: "flex",
			}}>
			<SideBar />
			<Routes>
				<Route path='/' element={<CreateQuiz />}></Route>
				<Route path='/exam' element={<CreateExam />}></Route>
				<Route path='/assign' element={<AssignUser />}></Route>
			</Routes>
		</main>
	);
};

export default Routers;
