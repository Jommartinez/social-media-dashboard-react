import React from "react";
import "./card.css";

function Card({ icon, username, followers, todayFollowers, name }) {
	const cardClass = `card ${name}`;
	return (
		<article className={cardClass}>
			<p className="card-title">
				<img src={icon} alt="social icon" />
				{username}
			</p>
			<p className="card-followers">
				<span className="card-followers-number">{followers}</span>
				<span className="card-followers-title">Followers</span>
			</p>
			<p className="card-today">
				<img src="images/icon-up.svg" alt="icon up" />
				{todayFollowers} Today
			</p>
		</article>
	);
}

export default Card;
