import { GoLightBulb, GoStar } from "react-icons/go";

const Card = ({ title, paragraph }) => {
	return (
		<div className="card">
			<h3 className="card__title">{title}</h3>
			<GoLightBulb className="card__icon-bulb" />
			<GoStar className="card__icon-stars starOne" />
			<GoStar className="card__icon-stars starTwo" />
			<GoStar className="card__icon-stars starThree" />
			<GoStar className="card__icon-stars starFour" />
			<GoStar className="card__icon-stars starFive" />
			<p className="card__paragraph">{paragraph}</p>
		</div>
	);
};

export default Card;
