// Right sidebar for assign user
import React from "react";
import Card from "../card/Card";
import "./AssignUser.css";

const RightSiderbar = () => {
	return (
		<main className='rightSidebarContainer'>
			<Card heading={"Total users"} quantity={1000} />
			{/* users */}
			<h2>User</h2>
			<section className='users'>
				<div className='user'>
					<img
						src='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg'
						alt=''
						className='userImg'
					/>
					<p className='name'>Name</p>
				</div>
				<div className='user'>
					<img
						src='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg'
						alt=''
						className='userImg'
					/>
					<p className='name'>Name</p>
				</div>
				<div className='user'>
					<img
						src='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg'
						alt=''
						className='userImg'
					/>
					<p className='name'>Name</p>
				</div>
				<div className='user'>
					<img
						src='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg'
						alt=''
						className='userImg'
					/>
					<p className='name'>Name</p>
				</div>
			</section>
		</main>
	);
};

export default RightSiderbar;
