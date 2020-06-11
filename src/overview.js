import React from "react";
import CardSmall from "./card-small";
import "./overview.css";

const cardSmallList = [
	{
		icon: "images/icon-facebook.svg",
		pageViews: "87",
		growth: 3,
		key: 1,
	},
	{
		icon: "images/icon-instagram.svg",
		pageViews: "187",
		growth: 23,
		key: 2,
	},
	{
		icon: "images/icon-twitter.svg",
		pageViews: "12",
		growth: 7,
		key: 3,
	},
	{
		icon: "images/icon-facebook.svg",
		pageViews: "44",
		growth: 3,
		key: 4,
	},
	{
		icon: "images/icon-youtube.svg",
		pageViews: "99",
		growth: 63,
		key: 5,
	},
	{
		icon: "images/icon-instagram.svg",
		pageViews: "878",
		growth: 345,
		key: 6,
	},
	{
		icon: "images/icon-facebook.svg",
		pageViews: "287",
		growth: 8,
		key: 7,
	},
	{
		icon: "images/icon-twitter.svg",
		pageViews: "7",
		growth: 1,
		key: 8,
	},
];

function Overview() {
	return (
		<section className="overview">
			<div className="wrapper">
				<h2>Overview - Today</h2>
				<div className="grid">
					{cardSmallList.map(({ icon, pageViews, growth, key }) => (
						<CardSmall
							key={key}
							icon={icon}
							pageViews={pageViews}
							growth={growth}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Overview;
