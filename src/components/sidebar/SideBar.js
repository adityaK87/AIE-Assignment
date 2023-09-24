import React from "react";
import "./SideBar.css"; // Import the CSS file for styling
import { Link, useLocation } from "react-router-dom";
import { MdCalendarMonth } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

const withLocation = (SideBar) => (props) => {
	const location = useLocation();
	return true ? <SideBar {...props} location={location} /> : "";
};

function Sidebar() {
	const location = useLocation();
	const homeClass = location.pathname === "/" ? "active-item" : "";
	const examClass = location.pathname === "/exam" ? "active-item" : "";
	const assignClass = location.pathname === "/assign" ? "active-item" : "";

	return (
		<div className='sidebar'>
			<div className='logo'>
				<img
					src='https://seeklogo.com/images/S/school-pens-logo-75E6BEA4FD-seeklogo.com.png'
					alt='Logo'
					className='logoImg'
				/>
			</div>
			<div className='sidebar-menu'>
				<ul>
					<Link to='/' className={`btn ${homeClass}`}>
						<span className='btn-icon'>
							<MdCalendarMonth />
						</span>
						<p className='btn-text'>Quiz</p>
					</Link>
					<Link to='/exam' className={`btn ${examClass}`}>
						<span className='btn-icon'>
							<AiFillFileAdd />
						</span>
						<p className='btn-text'>Exam</p>
					</Link>
					<Link to='/assign' className={`btn ${assignClass}`}>
						<span className='btn-icon'>
							<BiSolidUser />
						</span>
						<p className='btn-text'>Assign User</p>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default withLocation(Sidebar);
