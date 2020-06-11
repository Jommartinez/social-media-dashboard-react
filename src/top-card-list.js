import React from "react";
import Card from "./card";

const cardListData = [
	{
		id: 1,
		username: "@jommartinez_",
		followers: "666",
		todayFollowers: 12,
		icon: "images/icon-facebook.svg",
		name: "facebook",
	},
	{
		id: 2,
		username: "@jommartinez_",
		followers: "777",
		todayFollowers: 20,
		icon: "images/icon-twitter.svg",
		name: "twitter",
	},
	{
		id: 3,
		username: "@jommartinez_",
		followers: "888",
		todayFollowers: 30,
		icon: "images/icon-instagram.svg",
		name: "instagram",
	},
	{
		id: 4,
		username: "@jommartinez_",
		followers: "999",
		todayFollowers: -2,
		icon: "images/icon-youtube.svg",
		name: "youtube",
	},
];

function TopCardList() {
	return (
		<section className="top-card">
			<div className="wrapper">
				<div className="grid">
					{cardListData.map((cardData) => (
						<Card key={cardData.id} {...cardData} />
					))}
				</div>
			</div>
		</section>
	);
}

export default TopCardList;
